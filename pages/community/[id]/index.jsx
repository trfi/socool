import FeedComponent from '@/components/Feed'
import { withSession } from '@/middlewares/session'
import strapi from "../../../utils/strapi"

const Feed = ({ community }) => {
  return (
    <FeedComponent community={community} />
  )
}

export const getServerSideProps = withSession(async ({ req, params }) => {
  const user = req.session.get('user') || null
  
  const community = await strapi(user).get('/communities/' + params.id)

  console.log(community.data);

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
      user,
      community: community.data
    }
  }
})

export default Feed;