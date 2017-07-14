import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-fetch'


const Post = (props) => {
  return(
  <Layout>
    <h1>{props.post.title}</h1>
    <p>{props.post.title.replace(/<[/]?p>/g, '')}</p>
  </Layout>
  )
}

Post.getInitialProps = async function (context) {
  const slug = context.asPath
  const res = await fetch(`http://localhost:8080/api${slug}`)
  const post = await res.json()

  return { post: post }
}

export default Post;
