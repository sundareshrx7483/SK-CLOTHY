import React from "react";
import "../../CSS/Mens/accessories.css";
import AccessoriesJson from "../../Json/Men/accessories.json";

const Tshirts = () => {
const divs=["div1","div2","div3","div5","div6","div7"]
  return (
    <div id="accessories">
      
      <div className="parent">
        {
          AccessoriesJson.map((accessories,index) => {
            return <div key={accessories.pid} className={divs[index]}>
              <img src={accessories.image} alt="" />
              <h1>{accessories.pname}</h1>
              <p>Price: ₹{accessories.price}</p>
              
            </div>
          })
       }
      </div>
    </div>
  );
};

export default Tshirts;
