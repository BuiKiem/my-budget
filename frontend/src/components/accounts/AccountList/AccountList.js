import React from "react";
import {
  Card,
  Button,
  IconButton,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  makeStyles,
  useTheme
} from "@material-ui/core";
import {
  AddCircle as AddCircleIcon,
  Settings as SettingsIcon
} from "@material-ui/icons";

import { Account } from "../Account/Account";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    color: props => props.infoColor.main,
    borderColor: props => props.infoColor.main
  }
});

export const AccountList = () => {
  const theme = useTheme();
  const infoColor = theme.palette.info;
  const classes = useStyles({ infoColor });
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
            <Grid
              classes={{ item: classes.item }}
              item
              xs={6}
              sm={4}
              md={2}
              key={account.id}
            >
              <Account account={account} />
            </Grid>
          ))}
          <Grid item xs={6} sm={4} md={2}>
            <Button
              classes={{ root: classes.root }}
              variant="outlined"
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
  );
};
