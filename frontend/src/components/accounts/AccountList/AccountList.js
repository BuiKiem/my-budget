import React from "react";
import {
  Card,
  Button,
  IconButton,
  CardHeader,
  Typography
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
      color: "607d8b"
    },
    {
      id: 2,
      name: "saving",
      balance: 20000,
      color: "ff9800"
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

        {accounts.map(account => (
          <Account key={account.id} account={account} />
        ))}
        <Button variant="outlined" size="small" endIcon={<AddCircleIcon />}>
          <h3>Add account</h3>
        </Button>
      </Card>
    </section>
  );
};
