import React from "react";
import { HomeLeft, HomeRight } from "../components";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <div className="home">
      <Grid container>
        <HomeLeft />
        <HomeRight />
      </Grid>
    </div>
  );
};

export default Home