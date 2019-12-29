import React from "react";
import { AddCircle as AddCircleIcon } from "@material-ui/icons";
import { Button, makeStyles, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    color: props => props.infoColor.main,
    borderColor: props => props.infoColor.main
  }
});

export const AddAccountButton = () => {
  const theme = useTheme();
  const infoColor = theme.palette.info;
  const classes = useStyles({ infoColor });

  return (
    <Button
      classes={{ root: classes.root }}
      variant="outlined"
      endIcon={<AddCircleIcon />}
    >
      <Typography variant="button" component="h3">
        Add account
      </Typography>
    </Button>
  );
};
