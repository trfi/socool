import { useForm } from "react-hook-form"
import Link from 'next/link'
import ButtonGradient from '../Button/ButtonGradient'
import Input from '../Input/Input'
import expand from './img/expand.svg'
import avatar1 from './img/avatar1.svg'
import play from './img/play.svg'
import logo from '../../components/logo.svg'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/router';

const LoginComponent = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    await axios.post('/api/login', { identifier: data.Email, password: data.Password });
    router.push('/create-community');
  };

  return (
    <div className="flex justify-between my-20 text-gray-dark container mx-auto">
      <section className="flex flex-col bg-white w-5/12 mx-10 py-12 px-12 md:px-20 rounded-3xl text-center justify-center items-center space-y-4">
        <div className="flex items-center">
          <Image width="50" src={logo} alt="logo" />
          <h1 className="text-4xl font-bold text-purple ml-2">SoCool</h1>
        </div>
        <h2 className="text-xl font-semibold text-gray-dark pt-5">Want to see SoCool in action?</h2>
        <h4 className="font-semibold text-gray-dark">Watch an on-demand product walkthrough or live demo (your choice), and start your free 14-day trial.</h4>
        <Image width="100" src={avatar1} alt="avatar1" />
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 w-full">
          <Input label="Email" register={register} placeholder required></Input>
          <Input label="Password" register={register} type="password" placeholder required></Input>
          <ButtonGradient>Login</ButtonGradient>
        </form>
        <p className="text-xs">New to SoCool Business? 
          <Link href="/signup" className="text-purple"> Sign up</Link> for free
        </p>
      </section>
      <aside className="bg-white w-7/12 text-center p-12">
        <div className="bg-[#1A1A1A] flex relative justify-center w-4/5 items-center rounded-2xl mx-auto h-96">
          <Image src={play} alt="play" className="cursor-pointer" />
          <div className="absolute right-5 bottom-5 cursor-pointer"><Image src={expand} alt="expand" /></div>
        </div>
        <h3 className="text-lg text-gray-dark font-semibold w-3/5 mx-auto mt-10">
          “People will always want to have interactive group experiences with their friends, they’ll always want to cut out the middleman when possible, and they’ll always want good value for their money. Don’t build a website, build a community.”
        </h3>
        <h3 className="text-purple text-xl font-bold mt-10">Kevin Duong</h3>
        <p className="font-semibold">Co-founder and CEO, SoCool</p>
      </aside>
    </div>
  )
}

export default LoginComponent;