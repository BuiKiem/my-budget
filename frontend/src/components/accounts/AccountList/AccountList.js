import React from "react";
import {
  Card,
  IconButton,
  CardHeader,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import { Settings as SettingsIcon } from "@material-ui/icons";

import { Account } from "../Account/Account";
import { AddAccountButton } from "../AddAccountButton/AddAccountButton";

export const AccountList = () => {
  const accounts = [
    {
      id: 1,
      name: "cash",
      balance: 10000,
      color: "f48fb1"
    },
    {
      id: 2,
      name: "saving",
      balance: 20000,
      color: "e91e63"
    }
  ];

  return (
    <Card component="section" aria-label="accounts section">
      <CardHeader
        title={
          <Typography variant="h5" component="h2">
            List of accounts
          </Typography>
        }
        action={
          <IconButton aria-label="configure account">
            <SettingsIcon />
          </IconButton>
        }
      />

      <CardContent>
        <Grid container spacing={1}>
          {accounts.map(account => (
            <Grid item xs={6} sm={4} md={2} key={account.id}>
              <Account account={account} />
            </Grid>
          ))}
          <Grid item xs={6} sm={4} md={2}>
            <AddAccountButton />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
