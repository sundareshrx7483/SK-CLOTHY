import React from 'react'
import HoodiesJson from '../../Json/Men/hoodies.json'
import { Button, Stack } from '@mui/material'
const Hoodies = () => {
  return (
    <div>
      <div className="parent">
        {
          HoodiesJson.map((hoodies,index) => {
            return <div key={hoodies.div} className={div%[index]}>
              <img src={hoodies.image} alt="" />
              <h1>{hoodies.pname}</h1>
              <p>Price: ₹{hoodies.price}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignContent: "center",
                  width: "400px",
                  height: "100px",
                }}
              >
                {/* <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}} onClick={()=>handleAddTocart(Blazzers)}> </button> */}
                {/* <button style={{backgroundColor:"lightgreen",borderRadius:"2px",padding:"3px",width:"100px"}}>Buy</button> */}
                {/* <button style={{ backgroundColor: "lightgreen", borderRadius: "2px", padding: "3px", width: "100px" }}>BUY</button> */}

                <Stack
                  spacing={10}
                  direction="row"
                  justifyContent={"space-evenly"}
                  alignContent={"center"}

                >
                  <Button variant="outlined" size="small" color="warning" disableElevation onClick={()=>handleAddTocart(Blazzers)} >
                    Cart <sup>+</sup>
                  </Button>
                  <Button variant="contained" size="small" disableElevation color="success">BUY</Button>
                </Stack>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Hoodies