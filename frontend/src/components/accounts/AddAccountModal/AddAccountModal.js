import React from "react";
import {
  Card,
  Dialog,
  Slide,
  useMediaQuery,
  useTheme,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    minHeight: "80vh"
  }
});

export const AddAccountModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paper: classes.paper
      }}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      TransitionComponent={Slide}
      TransitionProps={{
        in: open,
        direction: "left"
      }}
    >
      <Card>
        <h1>Modal Content</h1>
      </Card>
    </Dialog>
  );
};
