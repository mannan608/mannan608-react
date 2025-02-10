import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hire" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
