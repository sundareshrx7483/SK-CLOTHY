import React from "react";
import "../../CSS/Mens/tshirts.css";
import JacketJson from "../../Json/Men/jackets.json";
import '../../CSS/Mens/jacket.css'
const Tshirts = () => {
const divs=["div1","div2","div3","div5","div6","div7"]
  return (
    <div id="jackets">
      
      <div className="parent">
        {
          JacketJson.map((jackets,index) => {
            return <div key={jackets.pid} className={divs[index]}>
              <img src={jackets.image} alt="" />
              <h1>{jackets.pname}</h1>
              <p>Price: ₹{jackets.price }</p>
            </div>
          })
       }
      </div>
    </div>
  );
};

export default Tshirts;
