import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../assets/s1.png";
import pimage2 from "../assets/s2.png";

function Products() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolar sit amet consectetur adipisicing elit. Facilis mexime
        veniam voluptate, quis nostrum aliquid!
      </p>
      <div className="a-container">
        <Productbox image={pimage1} title="Luger Burger" />
        <Productbox image={pimage2} title="Le Pigen Burger" />
        <Productbox image={pimage1} title="Luger Burger" />
      </div>
    </div>
  );
}

export default Products;
