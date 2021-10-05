import MyCommunityComponent from "../components/Community/List"
import { withSession } from '../middlewares/session'
import strapi from "../utils/strapi"

const CreateCommunity = ({ user, communities }) => (
  <MyCommunityComponent user={user} communities={communities}/>
)

export const getServerSideProps = withSession(async ({ req }) => {
  const user = req.session.get('user') || null
  if (!user) {
    return {
      redirect: {
        permanent: false, destination: '/login'
      }
    }
  }
  const resp = await strapi(user).get(`/communities`);
  console.log(resp.data);
  return { props: { user, communities: resp.data } }
})

// export const getStaticProps = async () => {
//   const resp = await strapi(user).get(`/communities`);
//   return {
//     props: { communities: resp.data }
//   }
// }

export default CreateCommunity