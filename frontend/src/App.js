import React from "react";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";

import { Layout } from "./components/Layout/Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#21cb87"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <h1>My App</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
