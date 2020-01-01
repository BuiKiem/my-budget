import React from "react";
import { Grid, Paper, Card, Hidden } from "@material-ui/core";
import { Account } from "../../components/accounts/Account/Account";
import useAxios from "axios-hooks";

export const AccountsPage = () => {
  const [{ data, loading, error }] = useAxios({
    url: "http://localhost:8000/api/accounts/"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

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
