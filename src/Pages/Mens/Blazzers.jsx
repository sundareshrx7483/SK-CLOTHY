import React from "react";
import '../../CSS/Mens/Blazzers.css'
import BlazzersJson from "../../Json/Men/blazzers.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../SLICES/cartSlice";

const Blazzers = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"]
  
  
  const dispatch = useDispatch();

  
 const handleAddTocart = (items) => {
    dispatch(addToCart(items))
  }


  return (
    <div id="accessories">
      
      <div className="parent">
        {
          BlazzersJson.map((Blazzers,index) => {
            return <div key={Blazzers.pid} className={divs[index]}>
              <img src={Blazzers.image} alt="" />
              <h1>{Blazzers.pname}</h1>
              <p>Price: ₹{Blazzers.price}</p>
              <div style={{display:"flex", justifyContent:"space-evenly",alignContent:"center", width:"400px", height:"100px"}}>
                <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}} onClick={()=>handleAddTocart(Blazzers)}>Cart <sup>+</sup> </button>
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

export default Blazzers;
