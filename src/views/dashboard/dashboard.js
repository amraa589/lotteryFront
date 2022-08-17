import { Grid, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import User from "./user";
import Lottery from "./lottery";

const Dashboard = (props) => {
  /**
   * @TODO
   * - Check session
   * - Lottery, User module
   */

  return (


      <Grid container spacing={2}
        sx={{
          display: "flex",
          height:"100vh",
      }}
      >
        <Grid xs={3} md={3} lg={3}
        sx={
          {
            backgroundColor: "blue"
          }
        }>

        </Grid>
        <Grid xs={8} md={8} lg={8}
        sx={
          {
            backgroundColor: "green"
          }
        }
        >
        </Grid>

                
      <Typography>Dashboard</Typography>
      <BrowserRouter>
      <Routes>
        <Route path="/lottery" element={<Lottery/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
      
      </BrowserRouter>

      </Grid>

  );
};

export default Dashboard;
