import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography, TextField } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import {RegisterDialog} from "../components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    login: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
    },
    loginWrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: 'column',
      maxWidth: 600,
      marginTop: 20,
    },
    loginIcon: {
        fontSize: 40,
        alignSelf: "center"
    },
    loginTitle: {
      fontSize: 23,
      fontWeight: 700,
      marginTop: 40,
      marginBottom: 10
    },
    loginFormItem: {
      width: "100%",
      paddingTop: 10,
      paddingBottom: 10,
    },
    loginFormButton: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        padding: '25px 15px'
    },
    loginLinkWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    loginLink: {
      fontSize: 15,
      fontWeight: 400,
      color: "#1b95e0",
      backgroundColor: 'inherit',
      padding: 0,
      borderRadius: 0,
      "&:hover": {
        borderBottom: "1px solid #1b95e0",
        backgroundColor: 'inherit',
      }
    },
  })
);

const Login = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <TwitterIcon className={classes.loginIcon} color="primary"/>
        <form style={{width: "600px"}}>
          <Typography className={classes.loginTitle} variant="h1">
            Войти в Твиттер
          </Typography>
          <TextField
            className={classes.loginFormItem}
            variant="filled"
            label="Адрес электронной почты"
            type="email"
          />
          <TextField
            className={classes.loginFormItem}
            variant="filled"
            label="Пароль"
            type="password"
          />
          <Button
            className={classes.loginFormButton}
            variant="contained"
            color="primary"
          >
            Войти
          </Button>
        </form>
        <div className={classes.loginLinkWrapper}>
          <NavLink className={classes.loginLink} style={{marginRight: "15px"}} to="/">Забыли пароль?</NavLink>
          <Button
              className={classes.loginLink}
              style={{height: '22px'}}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Зарегистрироваться в Твиттере
            </Button>
        </div>
        <RegisterDialog open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default Login;
