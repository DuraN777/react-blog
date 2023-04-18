import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
// used to be 'useHystory' but it was ugpraded in react-router-dom v6

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const hystory = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      hystory("/");
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
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
        {!isPending && <button className="create__button" type="submit">Submit</button>}
        {isPending && <button className="create__button" disabled>Adding blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;