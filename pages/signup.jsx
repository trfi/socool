import RegisterComponent from '../components/Auth/Register';
import DefaultLayout from '../components/Layout/Default'
import { withSession } from '../middlewares/session';

const Register = () => {
  return (
    <RegisterComponent />
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

Register.Layout = DefaultLayout

export default Register;