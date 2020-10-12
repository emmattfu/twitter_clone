import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(29,161,242,1.00)",
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "white",
        borderRadius: 15,
      },
      outlinedPrimary: {
        borderRadius: 15,
      },
    },
  },
});
