import { withRouter } from 'next/router'
import DefaultLayout from '../layouts/Default'
type PostProps = {
  router?: any
}
const Post: React.FunctionComponent<PostProps> = ({ router }) => {
  return (
    <DefaultLayout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </DefaultLayout>
  )
}
export default withRouter(Post)