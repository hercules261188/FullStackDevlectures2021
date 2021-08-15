import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './CountriesCard.css';
import { useHistory } from "react-router-dom";
export default function CountriesCards() {
    const [countriesData, setCountriesData] = useState([]);
    const history = useHistory();

    function fetchCountriesData() {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(function (response) {
            // handle success
            setCountriesData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    useEffect(()=>{
      fetchCountriesData();  
    },[]);
    function handleCountryCardClick(countryObject) {
        history.push({
            pathname: '/countryInfo',
            state: {  // location state
              countryObject: countryObject, 
            },
          });
    }
    function renderCountriesData() {
        return countriesData.map((countryObject, index)=>{
            return (
                <div className="col-md-4 d-flex justify-content-center my-4" role="button" onClick={()=>handleCountryCardClick(countryObject)} key={countryObject.name}>
                    <div className="card country-card d-flex justify-content-center">
                        <div>
                        <img src={countryObject.flag} className="flag-image card-img-top" alt="country flag"></img>
                        </div>
                        <div className="card-text card-body text-start text-decoration-none">
                        <div className="card-title fw-bold text-start">{countryObject.name}</div>
                        <div>
                            <span className="fw-bold">Population: </span>
                        {countryObject.population}
                        </div>
                        <div><span className="fw-bold">Capital:</span> {countryObject.capital}</div>
                        </div>                  
                    </div>
                </div>                 
            )
        });
    }
    return (
        <div className="row w-75">
           {renderCountriesData()} 
        </div>
    )
}
