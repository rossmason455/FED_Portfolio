import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function SingleCountry(){
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    
    const [population, setPopulation] = useState(null);
    const [gdp, setGdp] = useState(null);
    const [birthRate, setBirthRate] = useState(null);
    const [lifeExpectancy, setLifeExpectancy] = useState(null);
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
             .then(response => {
                console.log(response.data);
                setCountry(response.data[0]);



                const iso3 = countryData.cca3;

                 const fetchIndicator = (indicator, setter, label) => {
          axios
            .get(`https://api.worldbank.org/v2/country/${iso3}/indicator/${indicator}?format=json`)
            .then((res) => {
              if (res.data[1]) {
                setter(res.data[1][0].value);
              }
            })
            .catch((err) => console.log(`${label} error:`, err));
        };
                
         const indicators = [
          { code: 'SP.POP.TOTL', setter: setPopulation, label: 'Population' },
          { code: 'NY.GDP.MKTP.CD', setter: setGdp, label: 'GDP' },
          { code: 'SP.DYN.CBRT.IN', setter: setBirthRate, label: 'Birth Rate' },
          { code: 'SP.DYN.LE00.IN', setter: setLifeExpectancy, label: 'Life Expectancy' },
        ];


        indicators.forEach(({ code, setter, label }) =>
          fetchIndicator(code, setter, label)
        );

             })
             .catch(error => console.log(error));
    }, []);

   
   
   
   
   
   
   
   
   
   
   
   
   
   
    if(country === null){
        return (
            <p>Loading...</p>
        );
    }

    console.log(country.currencies["EGP"]);
    console.log(Object.keys(country.currencies));

    let currencies = Object.keys(country.currencies).map(currency => {
        return (
            <p>
                <b>Code: </b> {currency} <br />
                <b>Name: </b> {country.currencies[currency].name} <br />
                <b>Symbol: </b> {country.currencies[currency].symbol}
            </p>
        );
    });

    return (
        <>
            <img src={country.flags.png} />
            <p><b>Name:</b> {country.name.common}</p>
            <p><b>Official Name:</b> {country.name.official}</p>
            <p><b>Capital(s):</b> {country.capital.join(', ')}</p>
            <h2>Currencies:</h2>
            {currencies}
            <img src={country.coatOfArms.png} />
        </>
    );
};