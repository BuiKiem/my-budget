import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  MenuItem,
  Slide,
  TextField,
  Grid,
  useMediaQuery,
  IconButton,
  useTheme,
  makeStyles,
  Typography,
  Card
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles({
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

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

export const AddAccountModal = ({ open, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({ titleBackground: theme.palette.primary });

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = event => {
    setCurrency(event.target.value);
  };
  return (
    <Dialog
      classes={{
        paper: classes.paper
      }}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      open={open}
      PaperComponent={Card}
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
      <DialogContent>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoComplete="name"
            placeholder="Account Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            select
            fullWidth
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your currency"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="amount"
            label="Starting Amount"
            placeholder="Account Initial Balance"
            type="number"
          />
          <DialogActions>
            <Button
              size="large"
              variant="contained"
              onClick={handleClose}
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={handleClose}
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
