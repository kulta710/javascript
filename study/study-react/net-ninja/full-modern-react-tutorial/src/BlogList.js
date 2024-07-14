import { Link } from 'react-router-dom'

function BlogList ({ blogs, title }) {

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* Remember that when Link tag is rendered to document, it is changed to anchor tag. So when we need to style a Link tag, we need to appoint styling to the anchor tag */}
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList