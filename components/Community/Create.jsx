import React, { useState } from "react"
import { default as Button } from '../Button/ButtonGradient'
import Input from '../Input/Input'
import { useForm } from "react-hook-form"
import strapi from "../../utils/strapi"
import { message } from 'antd'
import { useWeb3Transfer, useMoralis } from "react-moralis"
import UploadComponent from "../Upload"
import { useRouter } from 'next/router'

const _receiver = '0x7e2c5dBE1e67C028dA623adF2940d630c23EA62E'

const CreateCommunityComponent = ({ user }) => {
  const router = useRouter();
  const [avatar, setAvatar] = useState('')
  const [cover, setCover] = useState('')
  const { Moralis } = useMoralis();
  Moralis.enable()
  const { fetch, error, isFetching, isLoading } = useWeb3Transfer({
    amount: Moralis.Units.ETH(0.001),
    receiver: _receiver,
    type: "native",
  });
  const { register, handleSubmit } = useForm();

  async function create(data) {
    message.loading({ content: 'Waiting...', key: 'creating', duration: 5000 });
    console.log('avatar', avatar);
    try {
      fetch({
        onSuccess: async () => {
          const resp = await strapi(user).post('/communities', { 
            name: data.Name, describe: data.Describe, avatar, cover, accessType: 'Open'
          });
          console.log(resp);
          message.success({content: 'Create community success!', key: 'creating'})
          router.push('/my-community')
        },
        onError: (error) => {
          message.error({content: 'Rejected', key: 'creating'})
        }
      })
      console.log('isLoading', isLoading);
      console.log('isFetching', isFetching);
    } catch (err) {
      console.log(err);
    }
  }

  const getAvatarId = (avatar) => {
    setAvatar(avatar)
  }

  const getCoverId = (cover) => {
    setCover(cover)
  }
  
  return (
      <>
        <div className="border-0 bg-white text-gray-dark space-y-8 rounded-3xl sm:p-12">
          <h1 className="text-3xl font-bold">Create Community</h1>
          <h2 className="text-2xl font-bold">Basic Information</h2>
          <form onSubmit={handleSubmit(create)} className="space-y-8 flex flex-col items-start">
            <div className="flex space-x-10">
              <div>
                <p>Logo</p>
                <UploadComponent user={user} className="avatar-uploader" width={114} cb={getAvatarId}/>
              </div>
              <div>
                <Input label="Name" register={register} />
                <label className="text-gray select-none font-semibold block mb-2 mt-6">Describe your community</label>
                <textarea {...register("Describe", { required: true })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" cols="20" rows="2"></textarea>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Cover</h3>
              <UploadComponent user={user} className="cover-uploader" width={500} cb={getCoverId} />
            </div>
            <h2 className="text-2xl font-bold">Community Access</h2>
            <div className="flex space-x-4">
              <div className="border-2 rounded-md border-purple p-3 w-48">
                <p className="font-semibold">Open</p>
                <p className="text-xs">Anyone can join this community. Free of charge.</p>
              </div>
              <div className="border-2 rounded-md border-gray-100 p-3 w-48">
                <p className="font-semibold">Premium</p>
                <p className="text-xs">Only Premium user. Pay Subscription fees.</p>
              </div>
            </div>
            <div>
              <Button disabled={isFetching}>Create Community</Button>
            </div>
          </form>
        </div>
      </>
  );
};


export default CreateCommunityComponent
