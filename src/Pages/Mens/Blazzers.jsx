import React from "react";
import "../../CSS/Mens/tshirts.css";
import TshirtJson from "../../Json/Men/tshirts.json";

const Tshirts = () => {
const divs=["div1","div2","div3","div5","div6","div7"]
  return (
    <div id="tshirts">
      
      <div className="parent">
        {
          TshirtJson.map((tshirts,index) => {
            return <div key={tshirts.pid} className={divs[index]}>
              <img src={tshirts.image} alt="" />
              <h1>{tshirts.pname}</h1>
              <p>Price: ₹{tshirts.price }</p>
            </div>
          })
       }
      </div>
    </div>
  );
};

export default Tshirts;
