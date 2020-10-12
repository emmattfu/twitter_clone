import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftPart: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#71C9F8",
      height: "100vh",
      
      overflow: 'hiden'
    },
    homeLeftList: {
      color: "white",
      fontWeight: 600,
      fontSize: 20,
      width: 381,
      "& h6": {
        fontWeight: 700,
        fontSize: 20,
      },
      "& li": {
        display: 'flex',
        alignItems: 'center'
      }
    },
    homeLeftIcon: {
      fontSize: 32,
      marginRight: 10
    },
    homeLeftBigIcon: {
      position: "absolute",
      top: '-10%',
      left: '10%',
      width: "150%",
      height: "150%"
    }
  })
);

const HomeLeft = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item sm={12} md={6}>
        <div className={classes.leftPart}>
        {/* <TwitterIcon className={classes.homeLeftBigIcon}/> */}
          <ul className={classes.homeLeftList}>
            <li>
              <SearchIcon className={classes.homeLeftIcon} />
              <Typography variant="h6">
                Читайте о том, что вам интересно.
              </Typography>
            </li>
            <li>
              <PeopleOutlineIcon className={classes.homeLeftIcon}/>
              <Typography variant="h6">
                Узнайте, о чем говорят в мире.
              </Typography>
            </li>
            <li>
              <ChatBubbleOutlineIcon className={classes.homeLeftIcon}/>
              <Typography variant="h6">Присоединяйтесь к общению.</Typography>
            </li>
          </ul>
        </div>
      </Grid>
    </>
  );
};

export default HomeLeft;
