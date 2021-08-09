import React from 'react'
import logo from './logo.svg'
import Header from "./Header";
import SiteBody from "./SiteBody";

function SiteFooter() {
  return(
    <div>Site footer</div>
  )
}
function App() {
  return(
    <div>
    <Header/>
    <SiteBody/>
    <SiteFooter/>
    </div>
  )
}

export default App;