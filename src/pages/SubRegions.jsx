import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SubRegionCard from "../components/SubRegionCard";

export default function Subregions() {
  const [subregionsList, setSubregionsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=subregion")
      .then((response) => {
        const countries = response.data;
        const uniqueSubregions = [
          ...new Set(countries.map((country) => country.subregion).filter(Boolean)),
        ];

        const subregionObjects = uniqueSubregions.map((subregion) => ({
          subregionName: subregion,
        }));

        setSubregionsList(subregionObjects);
      })
      .catch((error) => console.error(error));
  }, []);
}
