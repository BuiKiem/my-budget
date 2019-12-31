import React from "react";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { IndexPage } from "./pages/IndexPage/IndexPage";
import { AccountsPage } from "./pages/AccountsPage/AccountsPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#21cb87"
    }
  },
  transitions: {
    duration: {
      enteringScreen: 500,
      leavingScreen: 500
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#eff0f2"
      }
    },
    MuiCard: {
      root: {
        backgroundColor: "#fff",
        marginBottom: "8px"
      }
    }
  }
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/accounts/">
            <AccountsPage />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
