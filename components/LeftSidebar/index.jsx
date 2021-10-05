import Item from './Item'
import User from '../Widgets/User.jsx'
import { useRouter } from 'next/router'
import { Home, CreditCard, Video, Users, ShoppingBag, LogOut } from 'react-feather';
import Link from 'next/link'
import axios from 'axios'
import nookies from 'nookies'

const activeClass = 'text-purple-600'

const LeftSidebar = () => {
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.post('/api/logout');
      router.push('/login');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-3/12 hidden lg:block">
      <nav className="bg-white fit-content p-8 rounded-3xl">
        <ul className="space-y-6">
          <Item active={router.pathname === '/' ? activeClass : ''}>
            <Home size={30} />
            <Link key="Home" to="/" className="text-xl" href="/#">Home</Link>
          </Item>
          <Item active={router.pathname === '/wallet' ? activeClass : ''}>
            <CreditCard size={30} />
            <Link key="Home" to="/wallet" className="text-xl" href="/wallet">Wallet</Link>
          </Item>
          
          <Item>
            <ShoppingBag size={30} />
            <Link href="/#">Store</Link>
          </Item>
          <Item>
            <Users size={30} />
            <Link href="/#">Members</Link>
          </Item>
          <Item>
            <Video size={30} />
            <Link href="/#">Video</Link>
          </Item>
          <Item>
            <LogOut size={30} />
            <button className="font-semibold" onClick={logout}>Logout</button>
          </Item>
        </ul>
      </nav>
      {/* <User /> */}
    </div>
  )
}

export default LeftSidebar