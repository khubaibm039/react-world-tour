import { useState } from "react";
import "./Country.css"
const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;

    const [Visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!Visited)
    }

    return (
        <div className="country">
            <h3>Name : {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {
                Visited ? "I have visited this country" : " I want to visit this country"
            }

        </div>
    );
}
export default Country; 