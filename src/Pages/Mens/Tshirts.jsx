import React, { useState } from "react";
import "../../CSS/Mens/tshirts.css";
import TshirtJson from "../../Json/Men/tshirts.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../SLICES/cartSlice";
import { Button, Stack } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Tshirts = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"];

  const dispatch = useDispatch();

  const handleAddTocart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <div id="tshirts">
      <div className="parent">
        {TshirtJson.map((tshirts, index) => {
          return (
            <div key={tshirts.pid} className={divs[index % divs.length]}>
              <img src={tshirts.image} alt="" />
              <h1>{tshirts.pname}</h1>
              <p>Price: ₹{tshirts.price}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignContent: "center",
                  width: "400px",
                  height: "100px",
                }}
              >
                {/* <button
                  style={{
                    backgroundColor: "lightgreen",
                    borderRadius: "2px",
                    padding: "3px",
                    width: "100px",
                  }}
                  onClick={() => handleAddTocart(tshirts)}
                >
                  Cart <sup>+</sup>{" "}
                </button> */}
                {/* <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}}>Buy</button> */}
                {/* <button
                  style={{
                    backgroundColor: "lightgreen",
                    borderRadius: "2px",
                    padding: "3px",
                    width: "100px",
                  }}
                >
                  BUY
                </button> */}
                  <Stack
                  spacing={10}
                  direction="row"
                  justifyContent={"space-evenly"}
                  alignContent={"center"}

                >
                  <Button variant="outlined" size="small" color="warning" disableElevation onClick={()=>handleAddTocart(tshirts)} >
                    Cart <sup>+</sup>
                  </Button>
                  <Button variant="contained" size="small" disableElevation color="success">BUY</Button>
                </Stack>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tshirts;
