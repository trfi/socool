import React from 'react'
import Banner1 from './img/banner1.png'
import { Image as Img, Video } from 'react-feather';
import Post from './Post'
import PostImage1 from './img/postImage1.png'
import PostImage2 from './img/postImage2.png'
import Image from 'next/image'

const FeedComponent = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <Image src={Banner1} alt="banner1" />
      </div>
      <div className="bg-white flex justify-between items-center text-gray-dark py-4 px-6 rounded-3xl">
        <p>Post...</p>
        <div className="flex space-x-4">
          <div className="bg-gray-100 p-1 rounded-xl cursor-pointer">
            <Img size={27} />
          </div>
          <div className="bg-gray-100 p-1 rounded-xl cursor-pointer">
            <Video size={30} />
          </div>
        </div>
      </div>
      <Post postImage={PostImage1} />
      <Post postImage={PostImage2} />
    </div>
  );
};

export default FeedComponent
