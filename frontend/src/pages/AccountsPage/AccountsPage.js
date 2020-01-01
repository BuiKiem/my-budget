import React, { useState } from "react";
import { Grid, Paper, Card, Hidden } from "@material-ui/core";
import { Account } from "../../components/accounts/Account/Account";
import { AddAccountModal } from "../../components/accounts/AddAccountModal/AddAccountModal";
import { useBoolean } from "../../hooks";
import { updateAccount } from "../../actions";

export const AccountsPage = ({ data }) => {
  const [isOpen, handleOpen, handleClose] = useBoolean(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const handleClick = account => {
    setCurrentAccount(account);
    handleOpen();
  };
  return (
    <>
      <Paper component="main">
        <Grid container justify="space-evenly">
          <Hidden xsDown>
            <Grid item component="section" sm={4}>
              <Card>Account Actions</Card>
            </Grid>
          </Hidden>
          <Grid item component="section" xs={12} sm={7}>
            <Card>
              {data.map(account => (
                <Account
                  onClick={() => handleClick(account)}
                  key={account.id}
                  variant="outlined"
                  account={account}
                />
              ))}
            </Card>
          </Grid>
        </Grid>
      </Paper>

      <AddAccountModal
        open={isOpen}
        handleClose={handleClose}
        account={currentAccount}
        submitAction={updateAccount}
      />
    </>
  );
};
