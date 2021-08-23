import React, {useState, useEffect} from 'react'
import './App.css';
import axios from "axios";
import ProductsContainer from "./components/ProductsContainer";
// Step 1:
export const ProductDetailsContext = React.createContext(null);

function App() {
  const [productDetail, updateProductDetails] = useState(null);
  function fetchProductDetails(){
    axios.get('https://fakestoreapi.com/products/1')
      .then(function (response) {
        // handle success
        updateProductDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(()=>{
    fetchProductDetails();
  },[]);
  // Step 2: Create a provider and pass the value to be used in child components
  return (
    <ProductDetailsContext.Provider value={{productDetail, updateProductDetails}}>
      <div className="App">
        <ProductsContainer />
      </div>
    </ProductDetailsContext.Provider>
  );
}

export default App
