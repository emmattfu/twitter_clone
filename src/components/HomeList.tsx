import React from 'react'
import { IconButton, Typography, Button } from '@material-ui/core'
import {useHomeStyles} from '../pages/Home'
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/MailOutline";
import BookMarkIcon from "@material-ui/icons/TurnedInNot";
import ListIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/PersonOutline";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";

interface HomeListProps {
    classes: ReturnType <typeof useHomeStyles>
}

const HomeList: React.FC<HomeListProps> = ({classes}:HomeListProps):React.ReactElement => {
    return (
        <div style={{position: 'fixed'}}>
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
          <Button className={classes.tweetButton} fullWidth variant="contained" color="primary">Твитнуть</Button>
        </div>
    )
}

export default HomeList