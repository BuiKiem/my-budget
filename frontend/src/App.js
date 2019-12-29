import React from "react";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";

import { IndexPage } from "./pages/IndexPage/IndexPage";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
