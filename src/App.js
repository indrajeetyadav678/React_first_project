
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Men from "./Men";
import Women from "./Women";
import Home from "./Home";
import Babycollection from "./Babycollection";
import Blog from "./Blog";
import Contact from "./Contact";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="men" element={<Men/>} />
      <Route path="women" element={<Women />} />
      <Route path="baby" element={<Babycollection />}>


      </Route>
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
