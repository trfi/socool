import CreateCommunityComponent from "../components/Community/Create"
import { withSession } from '../middlewares/session'

const CreateCommunity = ({ user }) => (
  <CreateCommunityComponent user={user}/>
)

export const getServerSideProps = withSession(({ req }) => {
  const user = req.session.get('user') || null
  if (!user) {
    return {
      redirect: {
        permanent: false, destination: '/login'
      }
    }
  }
  return { props: { user } }
})

export default CreateCommunity