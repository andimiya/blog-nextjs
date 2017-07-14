import Link from 'next/link'

const BlogRoll = (props) => {

  console.log(props, 'props');

  return (
    <div>
      {props.title}
      {props.slug}
      {props.created_by}
      <Link as={`/post/${props.id}`} href={`/post?id=${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </div>
  )
}

export default BlogRoll;
