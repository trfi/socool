import React from 'react'
import Image from 'next/image'

const UserWidget = () => {
  return (
    <div className="flex rounded-full bg-[#E0E3E5]">
      <div><Image src="" alt="avatar" /></div>
      <div>
        <h1>Kevin Duong</h1>
        <h2>socool.club/kevin</h2>
      </div>
    </div>
  )
}

export default UserWidget