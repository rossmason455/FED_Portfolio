import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RegionCard from '../components/RegionCard';

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
    
    
    
    
    return(
        <h1>Hello from Contact page</h1>
    );
}