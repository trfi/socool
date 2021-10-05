import LoginComponent from '../components/Auth/Login';
import DefaultLayout from '../components/Layout/Default'
import { withSession } from '../middlewares/session';

const Login = () => {
  return (
    <LoginComponent />
  )
}

export const getServerSideProps = withSession((ctx) => {
  const { req } = ctx
  const user = req.session.get('user') || null

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return {
    props: {}
  }
})

Login.Layout = DefaultLayout

export default Login;