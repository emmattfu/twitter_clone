import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { Home } from "./pages";
import 'fontsource-roboto';

import "./App.css";
import { Footer } from "./components";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{position: 'relative'}}>
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
