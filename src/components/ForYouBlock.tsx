import React from 'react'
import classNames from 'classnames'
import {
    Typography,
    Paper,
    IconButton,
  } from "@material-ui/core";
import { useHomeStyles } from '../pages/Home/theme';
import MoreIcon from "@material-ui/icons/MoreHoriz";

  interface ForYouBlockProps {
      classes: ReturnType<typeof useHomeStyles>;
      title: string;

  }

const ForYouBlock:React.FC<ForYouBlockProps> = ({classes,title}:ForYouBlockProps):React.ReactElement => {
    return (
        <>
        <div style={{width: 317, marginBottom: 15}}>
        <Typography className={classNames(classes.forYou, classes.forYouRoundedTop)} variant="h6">{title}</Typography>
            <Paper className={classes.forYou}>
              <div>
                <Typography className={classes.forYouGreyText}>
                  <span>Праздники</span>&nbsp;
                  <span>·</span>&nbsp;
                  <span>Актуально</span>
                </Typography>
                <Typography className={classes.forYouBoldText} variant="h6">Halloween</Typography>
                <Typography className={classes.forYouGreyText}>Твитов: 674 тис.</Typography>
              </div>
              <div>
                <IconButton color="primary" component="span">
                  <MoreIcon />
                </IconButton>
              </div>
            </Paper>
            <Typography className={classNames(classes.forYou, classes.forYouRoundedBottom)}>Показать еще</Typography>
        
            
        </div>
        </>
    )
}

export default ForYouBlock