import { useParams } from "react-router-dom";
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
    <CountryCard
      key={country.cca3}
      flagImg={country.flags.png}
      name={country.name.common}
      capital={country.capital}
    />
  ));

   return (
    <div>
      <h1>{regionName}</h1>
      {countryCards}
    </div>
  );
}





