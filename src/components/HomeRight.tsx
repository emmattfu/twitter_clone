import React from "react";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeRight: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      height: "100vh"
    },
    homeRightIcon: {
      fontSize: 40
    },
    homeRightLogin: {
     width: 380
    },
    homeRightButton: {
      width: '100%',
      fontWeight: "bold"
    }
  }),
);

const HomeRight = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} md={6}>
        <div className={classes.homeRight}>
          <div className={classes.homeRightLogin}>
          <TwitterIcon color="primary" className={classes.homeRightIcon}/>
          <Typography>Узнайте, что происходит в мире прямо сейчас</Typography>
          <Typography>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
          <Button className={classes.homeRightButton} variant="contained" color="primary">Зарегистрироваться</Button>
          <Button className={classes.homeRightButton} variant="outlined" color="primary">Войти</Button>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default HomeRight;
