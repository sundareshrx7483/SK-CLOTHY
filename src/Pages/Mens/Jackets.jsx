import React from "react";
import "../../CSS/Mens/tshirts.css";
import JacketJson from "../../Json/Men/jackets.json";
import "../../CSS/Mens/jacket.css";
import { Button, Stack } from "@mui/material";
const Tshirts = () => {
  const divs = ["div1", "div2", "div3", "div5", "div6", "div7"];
  return (
    <div id="jackets">
      <div className="parent">
        {JacketJson.map((jackets, index) => {
          return (
            <div key={jackets.pid} className={divs[index]}>
              <img src={jackets.image} alt="" />
              <h1>{jackets.pname}</h1>
              <p>Price: ₹{jackets.price}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignContent: "center",
                  width: "400px",
                  height: "100px",
                }}
              >
                <Stack
                  spacing={10}
                  direction="row"
                  justifyContent={"space-evenly"}
                  alignContent={"center"}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    color="warning"
                    disableElevation
                    onClick={() => handleAddTocart(jackets)}
                  >
                    Cart <sup>+</sup>
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    disableElevation
                    color="success"
                  >
                    BUY
                  </Button>
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
