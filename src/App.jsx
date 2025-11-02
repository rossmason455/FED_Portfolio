import { BrowserRouter as Router, Routes, Route  } from 'react-router'
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Regions from './pages/Regions'
import SubRegions from './pages/SubRegions'
import RegionCountries from './pages/RegionCountries'
import SubRegionCountries from './pages/SubRegionCountries'
import PageNotFound from './pages/PageNotFound';
import SingleCountry from './pages/SingleCountry';



export default function App() {
  return (

    <>

      


    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/subregions' element={<SubRegions />} />
        <Route path='/regions' element={<Regions />} />

        {/* Example concepts covered in class, not needed in the portfolio */}
        
        <Route path="/regions" element={<Regions/>} />
        <Route path="/region/:regionName" element={<RegionCountries />} />
        <Route path="/subregion/:subregionName" element={<SubRegionCountries />} />
        <Route path='/country/:name' element={<SingleCountry />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Navbar />

    </Router>

    </>
  );
}