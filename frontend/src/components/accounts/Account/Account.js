import React from "react";
import { Button, Typography, makeStyles, useTheme } from "@material-ui/core";
import { AccountBalanceWallet as WalletIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    textAlign: "left"
  },
  containedLabel: {
    display: "block"
  },
  outlinedLabel: {
    display: "flex",
    justifyContent: "space-between"
  },
  contained: {
    backgroundColor: props => `#${props.bgColor}`,
    color: props => `${props.textColor}`
  }
});

export const Account = ({ account, ...buttonProps }) => {
  const { name, color, initial_balance } = account;
  const theme = useTheme();
  const textColor = theme.palette.getContrastText(`#${color}`);
  const classes = useStyles({ bgColor: color, textColor });
  return (
    <Button
      disableElevation
      classes={{
        root: classes.root,
        label:
          buttonProps.variant === "outlined"
            ? classes.outlinedLabel
            : classes.containedLabel,
        contained: classes.contained
      }}
      {...buttonProps}
    >
      {buttonProps.variant === "outlined" && (
        <WalletIcon htmlColor={`#${color}`} />
      )}
      <Typography variant="button" component="h3">
        {name}
      </Typography>

      <Typography variant="h6" component="h4">
        {initial_balance}
      </Typography>
    </Button>
  );
};
