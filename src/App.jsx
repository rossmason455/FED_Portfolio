import { BrowserRouter as Router, Routes, Route  } from 'react-router'
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Regions'
import PageNotFound from './pages/PageNotFound';
import SingleCountry from './pages/SingleCountry';



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* Example concepts covered in class, not needed in the portfolio */}
        <Route path='/country/:name' element={<SingleCountry />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Navbar />

    </Router>
  );
}