import React from "react";
import "../../CSS/Mens/accessories.css";
import AccessoriesJson from "../../Json/Men/accessories.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../SLICES/cartSlice";

const Accessories = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"]
  

  
  const dispatch = useDispatch();

  
 const handleAddTocart = (items) => {
    dispatch(addToCart(items))
  }

  return (
    <div id="accessories">
      
      <div className="parent">
        {
          AccessoriesJson.map((accessories,index) => {
            return <div key={accessories.pid} className={divs[index]}>
              <img src={accessories.image} alt="" />
              <h1>{accessories.pname}</h1>
              <p>Price: ₹{accessories.price}</p>
              <div style={{display:"flex", justifyContent:"space-evenly",alignContent:"center", width:"400px", height:"100px"}}>
                <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}} onClick={()=>handleAddTocart(accessories)}>Cart <sup>+</sup> </button>
                {/* <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}}>Buy</button> */}
                <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}}>BUY</button>
              </div>
            </div>
          })
       }
      </div>
    </div>
  );
};

export default Accessories;
