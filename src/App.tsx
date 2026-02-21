import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import { Route, Routes } from 'react-router-dom';
import ServicesPage from "./Components/pages/Services";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}