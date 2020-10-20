import React from "react";
import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import classNames from "classnames";
import { useHomeStyles } from "../pages/Home";

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarURL: string;
  };
  text: string;
}

const Tweet: React.FC<TweetProps> = ({classes,user,text,}: TweetProps): React.ReactElement => {
  return (
    <div>
      <Paper
        className={classNames(classes.tweetsHeader, classes.tweet)}
        variant="outlined"
      >
        <Typography className={classes.tweetsHeaderText} variant="h6">
          <Grid container>
            <Grid item xs={1}>
              <Avatar
                alt={`Avatar of ${user.fullname}`}
                src={user.avatarURL}
              />
            </Grid>
            <Grid item xs={11}>
              <Typography>
                <b>{user.fullname}</b>{" "}
                <span style={{ color: "#757575" }}>{user.username}</span>&nbsp;
                <span style={{ color: "#757575" }}>·</span>&nbsp;
                <span style={{ color: "#757575" }}>1ч</span>
              </Typography>
              <Typography>{text}</Typography>
              <div className={classes.tweetFooter}>
                <div>
                  <IconButton color="primary">
                    <ChatIcon className={classes.tweetFooterIcon} />
                  </IconButton>
                  <span className={classes.tweetFooterNumber}>1</span>
                </div>
                <div>
                  <IconButton color="primary">
                    <RepeatIcon className={classes.tweetFooterIcon} />
                  </IconButton>
                </div>
                <div>
                  <IconButton color="primary">
                    <LikeIcon className={classes.tweetFooterIcon} />
                  </IconButton>
                </div>
                <div>
                  <IconButton color="primary">
                    <ShareIcon className={classes.tweetFooterIcon} />
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </div>
  );
};

export default Tweet;
