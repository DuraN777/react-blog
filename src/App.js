import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
