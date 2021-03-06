import React, {useCallback, useEffect} from "react";
import {
  Container,
  Typography,
  Paper,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import {
  withStyles,
} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Tweet, HomeList, MakeTweet, ForYouBlock } from "../../components";
import SearchIcon from "@material-ui/icons/Search";
import CleanInputIcon from "@material-ui/icons/HighlightOff";
import { NavLink } from "react-router-dom";
import classNames from 'classnames'
import { useHomeStyles } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { clearTweets, getTweets } from "../../store/ducks/tweets/actionCreators";
import {RootState} from "../../store/store";
import GreyDevider from "../../components/GreyDevider";



const CssTextField = withStyles({
  root: {
    marginTop: 5,
    marginBottom: 10,
    border: "1px solid #E6ECF0",
    padding: "5px 10px",
    borderRadius: 30,
    backgroundColor: "#E6ECF0",
    fontSize: 15,
    color: "rgb(20, 23, 26)",
    "& svg": {
      color: "#657786",
    },
    "&:focus-within": {
      backgroundColor: "white",
      borderColor: "rgb(26, 145, 218)",
      "& svg": {
        color: "rgb(26, 145, 218)",
      },
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
  },
})(TextField);

const Home = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector((state: RootState) => state.tweets.items)

  const handleLoadingTweets = useCallback(() => {
      dispatch(clearTweets())
      dispatch(getTweets())
    },
    [dispatch],
  )

  useEffect(() => {
  
    handleLoadingTweets()
  }, [handleLoadingTweets])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{justifyContent: "center"}}>
        <Grid item xs={1} lg={3} style={{ padding: "0 40px" }}>
          <HomeList classes={classes} reloadTweets={handleLoadingTweets}/>
        </Grid>
        <Grid item xs={6} lg={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classNames(classes.tweetsHeader,classes.homeHeader)} variant="outlined">
              <Typography className={classes.tweetsHeaderText} variant="h6">
                Главная
              </Typography>
            </Paper>

            <MakeTweet classes={classes} />
            <GreyDevider />

            {tweets.map(tweet => <Tweet key={tweet.id} classes={classes} user={tweet.user} text={tweet.text}/> )}

          </Paper>
        </Grid>
        <Grid item xs={3} lg={3}>
          <div style={{position:"sticky", top:0}}>
          <CssTextField
            placeholder="Поиск в Твиттере"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CleanInputIcon />
                </InputAdornment>
              ),
            }}
          />
          <ForYouBlock classes={classes} title="Актуальные темы для вас"/>
          <ForYouBlock classes={classes} title="Кого читать"/>
          
          <ul style={{marginLeft:10}}>
            <li><NavLink to="/" className={classNames(classes.forYouGreyText, classes.underlined)}>Условия предоставления услуг</NavLink></li>
            <li><NavLink to="/" className={classNames(classes.forYouGreyText, classes.underlined)}>Политика конфиденциальности</NavLink></li>
            <li><NavLink to="/" className={classNames(classes.forYouGreyText, classes.underlined)}>Политика в отношении файлов cookie</NavLink></li>
            <li><NavLink to="/" className={classNames(classes.forYouGreyText, classes.underlined)}>Условия предоставления услуг</NavLink></li>
            <li><NavLink to="/" className={classNames(classes.forYouGreyText, classes.underlined)}>Информация о рекламе</NavLink></li>
            <li className={classes.forYouGreyText}>© Twitter, Inc., 2020.</li>
          </ul>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
