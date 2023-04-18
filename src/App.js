import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="create" element={ <Create/>}></Route>
        <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
