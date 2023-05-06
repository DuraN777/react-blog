import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";


const BlogDetails = () => {
  const {id} = useParams();
  const { data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
  const goToHome = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      goToHome('/')
    })
  }
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article className="blog-details__article">
          <h2 className="blog-details__title">{blog.title}</h2>
          <p className="blog-details__author">Written by {blog.author} </p>
          <p className="blog-details__text"> {blog.body} </p>
          <button type="button" className="blog-details__btn" onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;