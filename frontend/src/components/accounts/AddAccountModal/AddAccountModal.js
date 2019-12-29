import React from "react";
import {
  Card,
  Dialog,
  Slide,
  Grid,
  useMediaQuery,
  IconButton,
  useTheme,
  makeStyles,
  Typography
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  paper: {
    minHeight: "80vh"
  },
  titleRoot: {
    backgroundColor: props => props.titleBackground.main
  }
});

const DialogTitle = props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography classes={classes} {...other}>
      <Grid justify="space-between" alignItems="center" container>
        <Grid item>
          <Typography variant="h6" component="h1">
            {children}
          </Typography>
        </Grid>
        <Grid item>
          {onClose ? (
            <IconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </Grid>
      </Grid>
    </MuiDialogTitle>
  );
};

export const AddAccountModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({ titleBackground: theme.palette.primary });

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
      <DialogTitle
        classes={{
          root: classes.titleRoot
        }}
        onClose={handleClose}
      >
        ADD ACCOUNT
      </DialogTitle>
      <Card>
        <h1>Modal Content</h1>
      </Card>
    </Dialog>
  );
};
