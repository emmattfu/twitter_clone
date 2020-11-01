import React from "react";
import { IconButton, Typography, Button, Hidden } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import { useHomeStyles } from "../pages/Home/theme";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/MailOutline";
import BookMarkIcon from "@material-ui/icons/TurnedInNot";
import ListIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/PersonOutline";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import CloseIcon from '@material-ui/icons/Close';
import MakeTweet from "./MakeTweet";


interface HomeListProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const HomeList: React.FC<HomeListProps> = ({
  classes,
}: HomeListProps): React.ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div style={{ position: "sticky", top: 0 }}>
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
          <IconButton className={classes.homeListButton} aria-label="delete">
            <HomeIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Главная
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          {" "}
          <IconButton className={classes.homeListButton} aria-label="delete">
            <SearchIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Поиск
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          {" "}
          <IconButton className={classes.homeListButton} aria-label="delete">
            <NotificationIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Уведомления
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          {" "}
          <IconButton className={classes.homeListButton} aria-label="delete">
            <MessageIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Сообщения
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          {" "}
          <IconButton className={classes.homeListButton} aria-label="delete">
            <BookMarkIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Закладки
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          {" "}
          <IconButton className={classes.homeListButton} aria-label="delete">
            <ListIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Списки
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          {" "}
          <IconButton className={classes.homeListButton} aria-label="delete">
            <PersonIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Профиль
              </Typography>
            </Hidden>
          </IconButton>
        </li>
        <li>
          {" "}
          <IconButton className={classes.homeListButton} aria-label="delete">
            <MoreIcon className={classes.homeListTextIcon} />
            <Hidden mdDown>
              <Typography className={classes.homeListText} variant="h6">
                Еще
              </Typography>
            </Hidden>
          </IconButton>
        </li>
      </ul>
      <Button
        onClick={handleClickOpen}
        className={classes.tweetButton}
        fullWidth
        variant="contained"
        color="primary"
      >
        Твитнуть
      </Button>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClick={handleClose}>
        <IconButton aria-label="delete">
            <CloseIcon
              className={classes.homeListTextIconBird}
              color="primary"
            />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <MakeTweet classes={classes}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeList;
