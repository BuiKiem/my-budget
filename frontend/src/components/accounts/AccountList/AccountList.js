import React, { useState } from "react";
import {
  Card,
  IconButton,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  makeStyles,
  useTheme
} from "@material-ui/core";
import { Settings as SettingsIcon } from "@material-ui/icons";
import useAxios from "axios-hooks";

import { Account } from "../Account/Account";
import { AddAccountButton } from "../AddAccountButton/AddAccountButton";
import { AddAccountModal } from "../AddAccountModal/AddAccountModal";

import { useBoolean } from "../../../hooks";

const useStyles = makeStyles({
  root: {
    color: props => props.info.main
  }
});

export const AccountList = ({ data }) => {
  const [isOpen, handleOpen, handleClose] = useBoolean(false);
  const theme = useTheme();
  const classes = useStyles({ info: theme.palette.info });
  const [accounts, setAccounts] = useState(data);

  return (
    <Card component="section" aria-label="accounts section">
      <CardHeader
        title={
          <Typography variant="h5" component="h2">
            List of accounts
          </Typography>
        }
        action={
          <IconButton
            classes={{ root: classes.root }}
            aria-label="configure account"
          >
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
            <AddAccountButton onClick={handleOpen} />
          </Grid>
        </Grid>
      </CardContent>

      <AddAccountModal open={isOpen} handleClose={handleClose} />
    </Card>
  );
};
