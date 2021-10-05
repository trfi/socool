import { useRouter } from 'next/router';
import axios from 'axios';
import { withSession } from '../middlewares/session';

const Profile = (props) => {
  const router = useRouter();
  const { user: { email, username } } = props;
  console.log(props.user);
  const logout = async () => {
    try {
      await axios.get('/api/logout');
      router.push('/login');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export const getServerSideProps = withSession((ctx) => {
  const { req } = ctx
  const user = req.session.get('user') || null

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    }
  }

  return {
    props: {
      user
    }
  }
})

export default Profile;