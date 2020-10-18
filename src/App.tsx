import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { SignIn, Login, Home } from "./pages";

import "./App.css";
import { Footer } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App" style={{ position: "relative" }}>
          <Switch>
            <Route exact path="/">
              <SignIn />
              <Footer />
            </Route>
            <Route exact component={Login} path="/login" />
            <Route exact component={Home} path="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
