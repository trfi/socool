import FeedComponent from '../components/Feed'
import { withSession } from '../middlewares/session';

const Feed = () => {
  return (
    <FeedComponent />
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

export default Feed;