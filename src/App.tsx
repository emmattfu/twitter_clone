import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import Grid from "@material-ui/core/Grid";

import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
