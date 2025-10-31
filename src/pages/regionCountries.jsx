import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";


export default function RegionCountries() {
    const { regionName } = useParams();
     const [countryList, setCountryList] = useState([]);

    useEffect(() => { 
    axios
      .get(`https://restcountries.com/v3.1/region/${regionName}?fields=flags,name,capital,cca3`)
      .then((response) => {
        setCountryList(response.data);
      })
      .catch((error) => console.error(error));}, [regionName]);


      const countryCards = countryList.map((country) => (

        <>
              <Link 
            key={country.cca3} 
            to={`/country/${country.name.common}`} 
            className="no-underline hover:shadow-lg transition-shadow duration-200"
        >
                <CountryCard 
                    key={country.cca3}
                    flagImg={country.flags.png}
                    name={country.name.common}
                    capital={country.capital}
                />
                </Link>

                </>
  
  ));

   return (
    <div>
      <h1>{regionName}</h1>
      {countryCards}
    </div>
  );
}





