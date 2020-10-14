import React from "react";
import { SignInLeft, SignInRight } from "../components";
import Grid from "@material-ui/core/Grid";

const SingIn = () => {
  return (
    <div className="home" style={{position: 'relative'}}>
      <Grid container>
        <SignInLeft />
        <SignInRight />
      </Grid>
    </div>
  );
};

export default SingIn