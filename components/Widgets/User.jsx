import React from 'react'
import avatar from './avatar.png'
import Image from 'next/image'

const User = () => {
  return (
    <div className="flex align-center mt-32 py-7 px-5 rounded-3xl bg-[#E0E3E5]">
      <div><Image src={avatar} alt="avatar" width="45" /></div>
      <div className="self-stretch ml-4">
        <h1 className="text-xl font-semibold">Kevin Duong</h1>
        <h2 className="font-medium">socool.club/kevin</h2>
      </div>
    </div>
  )
}

export default User