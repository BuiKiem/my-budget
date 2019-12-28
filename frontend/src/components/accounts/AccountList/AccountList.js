import React from "react";
import { Card } from "@material-ui/core";
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
    <Card>
      <h2>List of accounts</h2>
      {accounts.map(account => (
        <Account key={account.id} account={account} />
      ))}
    </Card>
  );
};
