import React from 'react'
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface RegisterDialogProps {
    open: boolean;
    handleClose: () => void;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    RegisterDialogIcon: {
      alignSelf: "center", 
      fontSize: 28, 
      marginTop: 10,
      marginBottom: 25
    },
    RegisterDialogTitle: {
      fontSize: 23, 
      fontWeight: 700
    }
  })
);

const RegisterDialog: React.FC<RegisterDialogProps> = ({open, handleClose}) => {
  const classes = useStyles()

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <TwitterIcon className={classes.RegisterDialogIcon} color="primary"/>
            <DialogTitle className={classes.RegisterDialogTitle} id="form-dialog-title">Создайте учетную запись</DialogTitle>
            <DialogContent>
              <TextField
                margin="dense"
                id="name"
                label="Имя"
                type="text"
                variant="filled"
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              <TextField
                margin="dense"
                id="email"
                label="E-Mail"
                type="email"
                variant="filled"
                fullWidth
              />
            </DialogContent>
            <DialogContent>
              <TextField
                margin="dense"
                id="password"
                label="Пароль"
                type="password"
                variant="filled"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" fullWidth variant="contained">
               Далее
              </Button>
            </DialogActions>
          </Dialog>
    )
}

export default RegisterDialog