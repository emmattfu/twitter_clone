import React from 'react'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
        position: 'absolute',
        height: 80,
        backgroundColor: "white",
        left: 0,
        bottom: 0,
        width: '100%',
       display: 'flex',
    },
    footerList: {
      display: 'flex',
      padding: '10px 10px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    footerListItem: {
      paddingRight: 15,
      '& p' : {
        fontSize: 13,
        color: '#657786',
      }
    }
  })
);

  

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.footer} >
            <ul className={classes.footerList}>
              <li className={classes.footerListItem}>
                <Typography >О нас</Typography>
              </li>
              <li className={classes.footerListItem}><Typography >Справочный центр</Typography></li>
              <li className={classes.footerListItem}><Typography >Условия предоставления услуг</Typography></li>
              <li className={classes.footerListItem}><Typography >Политика конфиденциальности</Typography></li>
              <li className={classes.footerListItem}><Typography >Политика в отношении файлов cookie</Typography></li>
              <li className={classes.footerListItem}><Typography >Информация о рекламе</Typography></li>
              <li className={classes.footerListItem}><Typography>Блог</Typography></li>
              <li className={classes.footerListItem}><Typography>Статус</Typography></li>
              <li className={classes.footerListItem}><Typography>Работа</Typography></li>
              <li className={classes.footerListItem}><Typography>Ресурсы бренда</Typography></li>
              <li className={classes.footerListItem}><Typography>Реклама</Typography></li>
              <li className={classes.footerListItem}><Typography>Маркетинг</Typography></li>
              <li className={classes.footerListItem}><Typography>Твиттер для бизнеса</Typography></li>
              <li className={classes.footerListItem}><Typography>Разработчикам</Typography></li>
              <li className={classes.footerListItem}><Typography>Каталог</Typography></li>
              <li className={classes.footerListItem}><Typography>Наcтройки</Typography></li>
              <li className={classes.footerListItem}><Typography>© Twitter, Inc., 2020.</Typography></li>
            </ul>
     
        </div>
    )
}

export default Footer