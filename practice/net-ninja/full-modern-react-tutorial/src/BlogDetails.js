import { useParams } from 'react-router-dom'

function BlogDetails () {

  const { id } = useParams()
  const { data, error, isPending } = useFetch()

  return (
    <div className="blog-details">
      <h2>Blog details - { id }</h2>
    </div>
  )
}

export default BlogDetails