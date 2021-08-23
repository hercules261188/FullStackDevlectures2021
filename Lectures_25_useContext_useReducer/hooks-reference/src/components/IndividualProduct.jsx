// Step 4: Import the useContext hook
import React,{useContext} from "react";

import { ProductDetailsContext } from "../App";
export default function IndividualProduct() {
  // Step 5: Use the values passed in the context variable
  const values = useContext(ProductDetailsContext);
  console.log("values", values);
  function renderIndividualProdcutInformation() {
    if (values.productDetail !== null) {
      return (
        <div>
          <div>{values.productDetail.title}</div>
          <div>{values.productDetail.price}</div>
        </div>
      );
    } else {
      return (<div>No product details founds</div>);
    }
  }
  function handleClearProduct() {
    values.updateProductDetails(null);
  }
  return (
    <div>
      Individual Product Info
      {renderIndividualProdcutInformation()}
      <button onClick={handleClearProduct}>Clear Product Data</button>
    </div>
  );
}
