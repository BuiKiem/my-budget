import React from "react";
import { Button, Typography, makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    textAlign: "left"
  },
  label: {
    display: "block"
  },
  contained: {
    backgroundColor: props => `#${props.bgColor}`,
    color: props => `${props.textColor}`
  }
});

export const Account = ({ account: { name, balance, color } }) => {
  const theme = useTheme();
  const textColor = theme.palette.getContrastText(`#${color}`);
  const classes = useStyles({ bgColor: color, textColor });
  return (
    <Button
      variant="contained"
      disableElevation
      classes={{
        root: classes.root,
        label: classes.label,
        contained: classes.contained
      }}
    >
      <Typography variant="button" component="h3">
        {name}
      </Typography>

      <Typography variant="h6" component="h4">
        {balance}
      </Typography>
    </Button>
  );
};
