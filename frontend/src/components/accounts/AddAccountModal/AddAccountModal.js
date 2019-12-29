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
import { useForm } from "react-hook-form";
import * as Yup from "yup";

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

const schema = Yup.object().shape({
  name: Yup.string().required("Account name is required"),
  amount: Yup.number()
    .required("Account amount is reuquired.")
    .positive("Amount must be a positive number")
    .integer("Amount must be an integer number")
    .typeError("The amount must be a number")
});

export const AddAccountModal = ({ open, handleClose }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
    defaultValues: {
      name: "",
      amount: 0
    },
    reValidateMode: "onBlur"
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({ titleBackground: theme.palette.primary });

  const [currency, setCurrency] = React.useState("EUR");

  const onSubmit = data => console.log(data);

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
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputRef={register}
            helperText={errors.name ? errors.name.message : ""}
            variant="outlined"
            margin="normal"
            error={!!errors.name}
            required
            fullWidth
            label="Name"
            name="name"
            autoComplete="name"
            placeholder="Account Name"
            autoFocus
          />
          <TextField
            name="color"
            variant="outlined"
            margin="normal"
            select
            inputRef={register}
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
            error={!!errors.amount}
            helperText={errors.amount ? errors.amount.message : ""}
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="amount"
            label="Starting Amount"
            placeholder="Account Initial Balance"
            type="text"
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
              type="submit"
              size="large"
              variant="contained"
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
