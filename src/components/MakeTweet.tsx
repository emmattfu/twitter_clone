import React, { useState, useEffect } from "react";
import { useHomeStyles } from "../pages/Home";
import EmotionIcon from "@material-ui/icons/InsertEmoticonOutlined";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import CalendarIcon from "@material-ui/icons/DateRangeOutlined";
import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  TextareaAutosize,
} from "@material-ui/core";

interface MakeTweetProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const MakeTweet: React.FC<MakeTweetProps> = ({
  classes,
}: MakeTweetProps): React.ReactElement => {
  const [tweetText, setTweetText] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    if (tweetText.length) {
      setIsEmpty(false);
      setValue(tweetText.length / 5);
    } else {
      setIsEmpty(true);
      setValue(tweetText.length / 5);
    }
  }, [tweetText.length])

  const tweetTextHandle = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTweetText(e.target.value);
  };

  return (
    <Paper className={classes.homeMakeTweet}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid item xs={11}>
          <div>
            <TextareaAutosize
              className={classes.homeMakeTweetForm}
              aria-label="empty textarea"
              placeholder="Что происходит?"
              value={tweetText}
              onChange={tweetTextHandle}
            />
            <div className={classes.homeMakeTweetBottom}>
              <div>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <ImageIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="emotion"
                  component="span"
                >
                  <EmotionIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="calendar"
                  component="span"
                >
                  <CalendarIcon />
                </IconButton>
              </div>
              <div className={classes.homeMakeTweetBottomRight}>
                {!isEmpty && (
                  <div className={classes.homeMakeTweetBottomRight}>
                    <CircularProgress
                      className={classes.progressBG}
                      variant="static"
                      size={20}
                      value={100}
                    />
                    <CircularProgress
                      className={classes.progressTop}
                      variant="static"
                      size={20}
                      value={value}
                    />
                    <div className={classes.homeMakedevideLine}></div>
                    <div className={classes.homeMakeTweetPlus}>
                      <div className={classes.homeMakeTweetPlusIner}>+</div>
                    </div>
                  </div>
                )}

                <Button className={classes.tweetButtonSmall} variant="contained" color="primary" disabled={isEmpty}>
                  Твитнуть
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MakeTweet;
