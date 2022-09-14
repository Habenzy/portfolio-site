import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./global/header";
import Footer from "./global/footer";
import Home from "./home/home";
import Gallery from "./gallery/gallery";
import Nerdery from "./nerdy_shit/nerdery";
import Projects from "./projects/projects";

function App() {
  return (
    <BrowserRouter>
      <div id="page-container">
        <Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/nerdery" element={<Nerdery />}></Route>
          <Route path="/projects" element={<Projects />} ></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
