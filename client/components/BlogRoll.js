import Link from 'next/link'

const BlogRoll = (props) => {

  return (
    <div>
      {props.title}
      {props.slug}
      {props.created_by}
      <Link as={`/post/${props.slug}`} href={`/post?slug=${props.slug}`}>
        <a>{props.title}</a>
      </Link>
    </div>
  )
}

export default BlogRoll;
