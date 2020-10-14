import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeRight: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 84px)",
    },
    homeRightIcon: {
      fontSize: 40,
    },
    homeRightLogin: {
      width: 380,
    },
    homeRightButton: {
      width: "100%",
    },
    homeRightTitle: {
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 45,
      marginTop: 20,
    },
    homeRightSubTitle: {
      marginBottom: theme.spacing(2),
      fontSize: 15,
      fontWeight: 700,
    },
  })
);

const HomeRight = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <Grid item sm={12} md={6}>
        <div className={classes.homeRight}>
          <div className={classes.homeRightLogin}>
            <TwitterIcon color="primary" className={classes.homeRightIcon} />
            <Typography className={classes.homeRightTitle} variant="h4">
              Узнайте, что происходит в мире прямо сейчас
            </Typography>
            <Typography className={classes.homeRightSubTitle}>
              Присоединяйтесь к Твиттеру прямо сейчас!
            </Typography>
            <Button
              className={classes.homeRightButton}
              style={{ marginBottom: 18 }}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Зарегистрироваться
            </Button>

            <NavLink to="/login">
              <Button
                className={classes.homeRightButton}
                variant="outlined"
                color="primary"
              >
                Войти
              </Button>
            </NavLink>
          </div>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Создайте учетную запись</DialogTitle>
            <DialogContent>
              <TextField
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" fullWidth variant="contained">
               Далее
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </>
  );
};

export default HomeRight;
