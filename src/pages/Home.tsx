import React from "react";
import {
  Container,
  IconButton,
  Typography,
  InputBase,
  Paper
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

const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        "& MuiIconButton": {
          color: "rgb(29, 161, 242)",
        },
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
      <Grid container>
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
          <Paper style={{height: "100%", borderBottom: 'none', borderTop: 'none'}} variant="outlined"></Paper>
        </Grid>
        <Grid item xs={3}>
          <HomeSearchInput id="input-with-icon-textfield" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
