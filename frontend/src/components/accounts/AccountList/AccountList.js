import React from "react";
import {
  Card,
  Button,
  IconButton,
  CardHeader,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import {
  AddCircle as AddCircleIcon,
  Settings as SettingsIcon
} from "@material-ui/icons";

import { Account } from "../Account/Account";

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
    <section aria-label="accounts section">
      <Card>
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
              <Grid item xs={6} key={account.id}>
                <Account account={account} />
              </Grid>
            ))}
            <Grid item xs={6}>
              <Button
                variant="outlined"
                size="small"
                endIcon={<AddCircleIcon />}
              >
                <Typography variant="h6" component="h3">
                  Add account
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </section>
  );
};
