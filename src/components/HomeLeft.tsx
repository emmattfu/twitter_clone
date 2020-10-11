import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeLeftList: {
      color: 'white',
      fontWeight: 600,
      fontSize: 20
    },
    leftPart: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#71C9F8",
      height: "100vh"
    },
  }),
);

const HomeLeft = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} md={6}>
        <div className={classes.leftPart}>
          <ul className={classes.homeLeftList}>
            <li>Читайте о том, что вам интересно.</li>
            <li>Узнайте, о чем говорят в мире.</li>
            <li>Присоединяйтесь к общению.</li>
          </ul>
        </div>
      </Grid>
    </>
  );
};

export default HomeLeft;
