import React from 'react'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
        position: 'absolute',
        height: 80,
        backgroundColor: "white",
        left: 0,
        bottom: 0,
        width: '100%',
    }
  })
);

  

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.footer} >
            Footer
        </div>
    )
}

export default Footer