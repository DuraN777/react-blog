import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIPending] = useState(false);



  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label htmlFor="title">Blog title:</label>
        <input 
          type="text"
          id="title"
          required
          value = {title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="body">Blog text:</label>
        <textarea 
          name="blog body" 
          id="body"
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="author">Blog author:</label>
        <input 
          type="text"
          id="author"
          required
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </form>
    </div>
  );
}
 
export default Create;