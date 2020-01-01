import React from "react";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { IndexPage } from "./pages/IndexPage/IndexPage";
import { AccountsPage } from "./pages/AccountsPage/AccountsPage";
import { Layout } from "./components/Layout/Layout";
import useAxios from "axios-hooks";

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
  const [{ data, loading, error }] = useAxios({
    url: "http://localhost:8000/api/accounts/"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Layout>
            <Route path="/accounts/">
              <AccountsPage data={data} />
            </Route>
            <Route exact path="/">
              <IndexPage data={data} />
            </Route>
          </Layout>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
