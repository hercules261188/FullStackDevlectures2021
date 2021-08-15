import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import CountriesCards from "./components/CountriesCards";
import CountryInformation from "./components/CountryInformation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      </div>
      <Switch>
        <Route path="/countryInfo">
            <CountryInformation/>
        </Route>
        <Route path="/">
          <div className="d-flex justify-content-center w-100"><CountriesCards/></div>
          
        </Route>
      </Switch>
    </Router>
  )
}

export default App
