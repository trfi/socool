import logo from '../logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { message } from 'antd'
import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis"

const Nav = () => {
  const { authenticate, logout, userError, setUserData, isAuthenticated, user } = useMoralis();
  const [showMenu, setShowMenu] = useState(false)

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
    <nav className="bg-white mb-16 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image src={logo} alt="logo" />
              <span className="font-bold text-purple text-xl">SoCool</span>
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-5 flex space-x-8 items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-dark hover:text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              {
                !isAuthenticated && 
                <button onClick={authenticateHandle} className="border-2 rounded-lg px-4 py-1.5 border-gray-dark font-semibold">
                  Connect Wallet
                </button>
              }          

            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav
