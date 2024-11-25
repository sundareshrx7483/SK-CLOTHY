import React from "react";
import "../../CSS/Mens/shirts.css";
import ShirtJson from "../../Json/Men/shirts.json";

const Shirts = () => {
const divs=["div1","div2","div3","div5","div6","div7"]
  return (
    <div id="shirts">
      
      <div className="parent">
        {
          ShirtJson.map((shirts,index) => {
            return <div key={shirts.pid} className={divs[index]}>
              <img src={shirts.image} alt="" />
              <h1>{shirts.pname}</h1>
              <p>Price: ₹{shirts.price }</p>
            </div>
          })
       }
      </div>
    </div>
  );
};

export default Shirts;
