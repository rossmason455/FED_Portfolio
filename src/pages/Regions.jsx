import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RegionCard from '../components/RegionCard';

import AfricaImg from '../images/Africa.jpg';
import AmericasImg from '../images/Americas.jpg';
import AsiaImg from '../images/Asia.jpg';
import EuropeImg from '../images/Europe.jpg';
import OceaniaImg from '../images/Oceania.jpg';

const regionImages = {
    Africa: AfricaImg,
    Americas: AmericasImg,
    Asia: AsiaImg,
    Europe: EuropeImg,
    Oceania: OceaniaImg
};

export default function Regions(){
     const [regionsList, setRegionsList] = useState([]);

    useEffect(() => {  axios.get('https://restcountries.com/v3.1/all?fields=region')
            .then(response => {
                const uniqueRegions = [...new Set(
                    response.data
                        .map(country => country.region)
                        .filter(region => region) 
                )];
                
                
                const regionsWithImages = uniqueRegions.map(region => ({
                    regionName: region,
                    regionImg: regionImages[region] 
                }));

                setRegionsList(regionsWithImages);
            })
            .catch(error => console.log(error));}, []);
    
    
            const regionCards = regionsList.map(region => (
        <Link
            key={region.regionName}
            to={`/region/${region.regionName}`}
            className="no-underline hover:shadow-lg transition-shadow duration-200">
           
            <RegionCard
                regionName={region.regionName}
                regionImg={region.regionImg}
            />
        </Link>
    ));
    
    return(
         <div>
            <h1>Regions</h1>
            {regionCards}
        </div>
    );
}