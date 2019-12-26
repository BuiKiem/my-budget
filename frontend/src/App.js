import React from "react";
import { CssBaseline } from "@material-ui/core";

import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Layout>
        <h1>My App</h1>
      </Layout>
    </React.Fragment>
  );
}

export default App;
