/* eslint-disable jsx-a11y/anchor-is-valid */
import avatar1 from './img/avatar1.png'
import { Heart, MessageCircle } from 'react-feather';
import Image from 'next/image'

const Post = ({ postImage }) => {
  return (
    <>
      <div className="border-0 flex flex-col items-start
        bg-white text-gray-dark rounded-3xl">
        <div className="p-5">
          <h5 className="font-semibold">Brand Board</h5>
          <div className="flex my-2">
            <div className="cursor-pointer"><Image src={avatar1} alt="avatar1" /></div>
            <div className="ml-3">
              <a href="#" className="text-xs block">Fortnite</a>
              <span className="text-xs">2 hours ago</span>
            </div>
          </div>          
          <span className="text-xs font-semibold">
            FORTNITE COSMIC SUMMER: PACK FOR THE BEACH WITH NEW REWARDS AND MORE!
          </span>
        </div>
        <div>
          <Image src={ postImage } alt="PostImage" />
        </div>
        <div className="p-4">
          <div className="text-gray-light flex space-x-3">
            <div className="flex items-center ">
              <Heart size={15} className="cursor-pointer"/> <p className="ml-1">8k</p>
            </div>
            <div className="flex items-center">
              <MessageCircle className="cursor-pointer" size={15} /> <p className="ml-1">8k</p>
            </div>
          </div>
          <span className="text-xs">Fortnite changel&apos;s video</span>
        </div>
      </div>
    </>
  )
}

export default Post