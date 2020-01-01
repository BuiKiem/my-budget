import React from "react";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { IndexPage } from "./pages/IndexPage/IndexPage";
import { AccountsPage } from "./pages/AccountsPage/AccountsPage";
import { Layout } from "./components/Layout/Layout";

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
          <Layout>
            <Route path="/accounts/">
              <AccountsPage />
            </Route>
            <Route exact path="/">
              <IndexPage />
            </Route>
          </Layout>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
