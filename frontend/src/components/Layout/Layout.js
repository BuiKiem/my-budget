import React from "react";
import { Card, Paper, Typography } from "@material-ui/core";

import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <Paper>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Card>
          <Typography align="center">Bui Van Trung @2019</Typography>
        </Card>
      </footer>
    </Paper>
  );
};
