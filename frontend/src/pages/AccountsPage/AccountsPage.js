import React from "react";
import { Grid, Paper, Card, Hidden } from "@material-ui/core";
import { Account } from "../../components/accounts/Account/Account";

export const AccountsPage = ({ data }) => {
  return (
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
              <Account key={account.id} variant="outlined" account={account} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};
