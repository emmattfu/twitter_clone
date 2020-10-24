import React from "react";
import {
  Container,
  Typography,
  InputBase,
  Paper,
} from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Tweet, HomeList, MakeTweet } from "../components";


export const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    tweetsWrapper: {
      height: "100%",
      borderBottom: "none",
      borderTop: "none",
    },
    tweetsHeaderText: {
      padding: "10px 15px",
      fontSize: 19,
      fontWeight: 800,
    },
    tweetsHeader: {
      borderLeft: "none",
      borderRight: "none",
      borderTop: "none",
    },
    tweet: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgb(245, 248, 250)",
      },
    },
    tweetFooter: {
      display: "flex",
      justifyContent: "space-between",
      width: 400,
      marginLeft: -10,
    },
    tweetFooterIcon: {
      fontSize: 20,
    },
    tweetFooterNumber: {
      fontSize: 13,
      fontWeight: 400,
    },
    homeListText: {
      fontSize: 19,
      color: "black",
      fontWeight: 700,
      marginLeft: 20,
    },
    homeListTextIcon: {
      fontSize: 32,
      color: "black",
      "&:hover": {
        color: "rgb(29, 161, 242)",
      },
    },
    homeListTextIconBird: {
      fontSize: 32,
      color: "primary",
    },
    homeListButton: {
      "&:hover": {
        backgroundColor: "rgba(29, 161, 242, .1)",
        borderRadius: 30,
        paddingRight: 40,
        "& h6": {
          color: "rgb(29, 161, 242)",
        },
        "& svg": {
          color: "rgb(29, 161, 242)",
        },
      },
    },
    homeMakeTweet: {
      padding: "15px 15px",
    },
    homeMakeTweetForm: {
      width: "100%",
      border: "none",
      resize: "none",
      fontSize: 19,
      lineHeight: 1.5,
      fontFamily: 'Segoe UI',
      "&:focus": {
        outline: "none",
      },
    },
    homeMakeTweetBottom: {
      marginLeft: -5,
      display: "flex",
      justifyContent: "space-between",
      "& .MuiIconButton-root": {
        padding: 6,
      },
    },
    homeMakeTweetBottomRight: {
      position: 'relative',
      display: "flex",
      alignItems: "center",
    },
    homeMakeTweetPlus: {
      position: 'relative',
      border: "1px solid #2FA9F3",
      borderRadius: "50%",
      width: 30,
      height: 30,
      cursor: "pointer",
      margin: "0 10px",
      "&:hover": {
        backgroundColor: "#EDF0F2"
      }
    },
    homeMakeTweetPlusIner: {
      color: "#2FA9F3",
      fontSize: 35,
      fontWeight: 100,
      position: 'absolute',
      top: -12,
      left: 3
    },
    progressBG: {
      color: "#E6ECF0",
      marginRight: 10,
    },
    progressTop: {
      position: 'absolute',
      marginRight: 10
    },
    homeMakedevideLine: {
     
    },
    tweetButton: {
      height: 45,
      fontSize: 15,
      marginTop: 25,
    },
  })
);

const HomeSearchInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 45,
      padding: 0,
    },
  })
)(InputBase);

const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3} style={{ padding: "0 40px" }}>
          <HomeList classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography className={classes.tweetsHeaderText} variant="h6">
                Главная
              </Typography>
            </Paper>
            <MakeTweet classes={classes} />
            <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
             <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
             <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
             <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
             <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
             <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
             <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
             <Tweet
              classes={classes}
              user={{
                fullname: "PlayStation",
                username: "@PlayStation",
                avatarURL:
                  "https://pbs.twimg.com/profile_images/1278183948279922690/ybnDHXn7_400x400.jpg",
              }}
              text="Hey folks - just wanted to let you know that we’re looking into your feedback on the recent changes to Parties on PS4. Thanks for speaking up - we’ll keep you posted"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <HomeSearchInput id="input-with-icon-textfield" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
