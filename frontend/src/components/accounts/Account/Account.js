import React from "react";
import { Button } from "@material-ui/core";

export const Account = ({ account: { name, balance, color } }) => {
  return (
    <Button variant="contained" color="primary" size="small" disableElevation>
      <h3>{name}</h3>
      <h4>{balance}</h4>
    </Button>
  );
};
