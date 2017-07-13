import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-fetch'


const Post = (props) => {
  console.log(props, 'props post page');
  return(
  <Layout>
    <h1>Title</h1>

  </Layout>
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:8080/api/post/${id}`)
  const post = await res.json()

  return { post: post }
}

export default Post;
