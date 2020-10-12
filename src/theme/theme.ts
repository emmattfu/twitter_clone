//@ts-nocheck

import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {

    primary: {
      main: "rgba(29,161,242,1.00)",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        fontSize: 16,
        fontWeight: 700,
        textTransform: 'none'
      },
      containedPrimary: {
        color: "white",
        boxShadow: 'none'
      },
      outlinedPrimary: {
    
      },
    },
  },
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      "Segoe UI",
      'Roboto',
      'Ubuntu',
      "Helvetica Neue",
      "sans-serif"
    ]
  }
});
