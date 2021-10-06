import FeedComponent from '../../../components/Feed'
import { withSession } from '../../../middlewares/session'
import { useRouter } from 'next/router'

const Feed = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id);
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