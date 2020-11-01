import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
    homeHeader:{
      position: 'sticky',
      top: 0,
      zIndex:100
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
    tweetTextCount: {
      fontSize: 13,
      marginRight: 5
    },
    homeListText: {
      fontSize: 18,
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
      fontFamily: "Segoe UI",
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
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    homeMakeTweetPlus: {
      position: "relative",
      border: "1px solid #2FA9F3",
      borderRadius: "50%",
      width: 30,
      height: 30,
      cursor: "pointer",
      margin: "0 10px",
      "&:hover": {
        backgroundColor: "#EDF0F2",
      },
    },
    homeMakeTweetPlusIner: {
      color: "#2FA9F3",
      fontSize: 35,
      fontWeight: 100,
      position: "absolute",
      top: -12,
      left: 3,
    },
    progressBG: {
      color: "#E6ECF0",
      marginRight: 10,
    },
    progressTop: {
      position: "absolute",
      marginRight: 10,
    },
    homeMakedevideLine: {},
    tweetButton: {
      height: 45,
      fontSize: 15,
      marginTop: 25,
    },
    tweetButtonSmall: {
      "&.Mui-disabled": {
        backgroundColor: "#8ED0F8",
        color: "white",
      },
    },
    forYou: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#F5F8FA",
      padding: 10,
      cursor: 'pointer',
      "&:hover": {
        backgroundColor: "#F0F3F5"
      }
    },
    forYouRoundedTop: {
      borderRadius: "15px 15px 0 0",
      fontSize: 19,
      fontWeight: 800,
      cursor: 'auto',
      "&:hover": {
        backgroundColor: "#F5F8FA"
      }
    },
    forYouRoundedBottom: {
      borderRadius: "0 0 15px 15px",
      fontSize: 15,
      fontWeight: 400,
      color: "rgb(29, 161, 242)"
    },
    forYouGreyText: {
      fontSize: 13,
      color: "rgb(101, 119, 134)"
    },
    forYouBoldText: {
      fontSize: 15,
      fontWeight: 700
    },
    underlined:{
      textDecoration: "none solid rgb(101, 119, 134)",
      "&:hover":{
        textDecoration: "underline"
      }
    }
  })
);