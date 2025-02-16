import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import RndProcess from "./pages/RndProcess";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rnd-process" element={<RndProcess />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hire" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
