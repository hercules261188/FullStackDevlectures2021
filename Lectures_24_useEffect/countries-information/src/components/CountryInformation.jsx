import React from 'react'
import { useLocation } from 'react-router-dom';
export default function CountryInformation() {
    const location = useLocation();
    console.log("location", location);
    const countryData = location.state.countryObject;
    if(countryData) {
        return (
            <div>
                <div>
                Country Name: {countryData.name}
                </div>
                <div>
                Capital Name: {countryData.capital}
                </div>
            </div>
        )
    } else {
        return (
            <div>
               No country information available 
            </div>
        )
    }
    
}
