import React from "react";
import Grid from "@material-ui/core/Grid";

const HomeLeft = () => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <div className="left-part" style={{backgroundColor: "#71C9F8", height: "100vh"}}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Grid>
    </>
  );
};

export default HomeLeft;
