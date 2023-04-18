import useFetch from "./useFetch";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
  const {id} = useParams();
  const { data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2 className="blog-details__title">{blog.title}</h2>
          <p className="blog-details__author">Written by {blog.author} </p>
          <p> {blog.body} </p>
          <button>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;