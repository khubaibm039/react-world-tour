import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedflags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }

    const handleVisitedFlags = flags => {
        console.log('flag adding');
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedflags(newVisitedFlags)
    }


    // remove item from in a state
    // use filter to select all the elements except the one you want to remove 



    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)}
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flags, idx) => <img key={idx} src={flags}></img>)
                }

            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}> </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;