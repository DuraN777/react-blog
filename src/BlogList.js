const BlogList = ({blogs, title}) => {
  return (
    <div className="blog-list">
      <h2 className="blog-list__title">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-list__item" key={blog.id}>
          <h3 className="blog-list__item-title">{blog.title}</h3>
          <p className="blog-list__item-author">Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;