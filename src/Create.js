import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label htmlFor="title">Blog title:</label>
        <input 
          type="text"
          id="title"
          required
        />
        <label htmlFor="body">Blog text:</label>
        <textarea 
          name="blog body" 
          id="body"
          required
        ></textarea>
        <label htmlFor="author">Blog author:</label>
        <input 
          type="text"
          id="author"
          required
        />
      </form>
    </div>
  );
}
 
export default Create;