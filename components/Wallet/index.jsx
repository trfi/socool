/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { default as Button } from '../Button/ButtonGradient'
import Input from '../Input/Input'
import { useForm } from "react-hook-form"
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis"
import { message } from 'antd'
import Table from './Table'


const chainToQuery = 'bsc testnet'


const WalletComponent = () => {
  const { authenticate, logout, userError, setUserData, isAuthenticated, user } = useMoralis();
  const Web3Api = useMoralisWeb3Api()
  const { register, handleSubmit } = useForm();
  const [ isUpdateUser, setUpdateUser ] = useState(false)

  const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(Web3Api.account.getTokenBalances, {
    chain: chainToQuery
  })
  // console.log(data);
  // if (isAuthenticated) {
  //   console.debug(user.attributes);
  // }
  function changeUserDataHandle(data) {
    console.debug(data);
    setUserData({
      username: data.Username,
      email: data.email
    })
    if (!userError) {
      message.success('Update user data success!')
      setUpdateUser(false)
    }
    else message.error(`Update user data failed ${userError.message}`)
  }

  function authenticateHandle() {
    authenticate({ 
      onSuccess: () => {
        message.success('Connect success!');
      },
      onError: () => {
        message.error('Connect failed!')
      }
    })
  }

  return (
      <div>
        <div className="border-0 flex flex-col items-start
        bg-white text-gray-dark space-y-8 rounded-3xl sm:p-12">
          <h1 className="text-3xl font-bold">Wallet</h1>
          { isAuthenticated ?
          <>
            <h1 className="text-2xl font-bold">Hello {user.get("username")}</h1>
            <h2 className="text-lg font-bold">Email: {user.get("email")}</h2>
            <h2 className="text-lg font-bold">EthAddress: {user.get("ethAddress")}</h2>
          </> :
          <h2 className="text-xl font-bold">Connect to your metamask wallet</h2>
          }
          
          <div className="flex space-x-3">
          { isAuthenticated ? 
            <>
              <Button onClick={() => setUpdateUser(!isUpdateUser)}>Change User Data</Button>
              {/* <Button onClick={fetch}>Get Token Balances</Button> */}
              <Button onClick={() => { setUpdateUser(false); logout() }}>Disconnect</Button>
            </> :
            <Button onClick={authenticateHandle}>Connect</Button>
          }
          </div>
          {isUpdateUser && 
            <form onSubmit={handleSubmit(changeUserDataHandle)} className="space-y-6">
              <Input label="Username" register={register} required></Input>
              <Input label="Email" register={register} required></Input>
              <Button>Set User Data</Button>
            </form>
          }
          { (data && data.length) ? 
            <>
              <h2 className="text-xl font-bold">Your balances</h2>
              <Table data={data} />
            </> :
            <h2 className="text-xl font-bold">You don&apos;t have any token</h2>
          }
          
        </div>
      </div>
  );
};

export default WalletComponent
