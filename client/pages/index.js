import Layout from '../components/MyLayout.js'
import BlogRoll from '../components/BlogRoll'
import fetch from 'isomorphic-fetch'

const Index = (props) => {
  return (
    <div>
      <Layout>
      {props.posts.map((post) => {
        return(
          <BlogRoll
            key={post.id}
            id={post.id}
            title={post.title}
            slug={post.slug}
            created_by={post.created_by}
          />
        );
      })}
      </Layout>
    </div>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:8080/api/post')
  const posts = await res.json()
  return {
    posts: posts
  }
}

export default Index;
