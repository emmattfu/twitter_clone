import React from "react";
import {
  Container,
  IconButton,
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
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/MailOutline";
import BookMarkIcon from "@material-ui/icons/TurnedInNot";
import ListIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/PersonOutline";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";
import { Tweet } from "../components";

export const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    tweetsWrapper: {
      height: "100%",
      borderBottom: "none",
      borderTop: "none",
    },
    tweetsHeaderText: {
      padding: "15px 15px",
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
          color: "rgb(29, 161, 242)"
        },
        "& svg": {
          color: "rgb(29, 161, 242)"
        }
      },
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
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul>
            <li>
              <IconButton aria-label="delete">
                <TwitterIcon
                  className={classes.homeListTextIconBird}
                  color="primary"
                />
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <HomeIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Главная
                </Typography>
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <SearchIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Поиск
                </Typography>
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <NotificationIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Уведомления
                </Typography>
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <MessageIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Сообщения
                </Typography>
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <BookMarkIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Закладки
                </Typography>
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <ListIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Списки
                </Typography>
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <PersonIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Профиль
                </Typography>
              </IconButton>
            </li>
            <li>
              {" "}
              <IconButton
                className={classes.homeListButton}
                aria-label="delete"
              >
                <MoreIcon className={classes.homeListTextIcon} />
                <Typography className={classes.homeListText} variant="h6">
                  Еще
                </Typography>
              </IconButton>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography className={classes.tweetsHeaderText} variant="h6">
                Главная
              </Typography>
            </Paper>
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
