import React from "react";
import {NavLink} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeRight: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      height: "calc(100vh - 84px)",
    },
    homeRightIcon: {
      fontSize: 40
    },
    homeRightLogin: {
     width: 380
    },
    homeRightButton: {
      width: '100%',
    },
    homeRightTitle: {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 45,
      marginTop: 20
    },
    homeRightSubTitle: {
      marginBottom: theme.spacing(2),
      fontSize: 15,
      fontWeight: 700
    }
  }),
);

const HomeRight = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item sm={12} md={6}>
        <div className={classes.homeRight}>
          <div className={classes.homeRightLogin}>
          <TwitterIcon color="primary" className={classes.homeRightIcon}/>
          <Typography className={classes.homeRightTitle} variant="h4">Узнайте, что происходит в мире прямо сейчас</Typography>
          <Typography className={classes.homeRightSubTitle}>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
          <Button className={classes.homeRightButton} style={{marginBottom: 18}} variant="contained" color="primary">Зарегистрироваться</Button>
          
          <NavLink to="/login">
          <Button className={classes.homeRightButton} variant="outlined" color="primary">Войти</Button>
          </NavLink>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default HomeRight;
