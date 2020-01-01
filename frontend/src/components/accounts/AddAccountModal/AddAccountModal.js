import React, { useEffect, useState } from "react";
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
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import axios from "axios";

const useStyles = makeStyles({
  titleRoot: {
    backgroundColor: props => props.titleBackground.main
  },
  colorDisplay: {
    width: "100%",
    height: "1rem",
    display: "block"
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

const schema = Yup.object().shape({
  name: Yup.string().required("Account name is required"),
  initial_balance: Yup.number()
    .required("Account amount is reuquired.")
    .positive("Amount must be a positive number")
    .integer("Amount must be an integer number")
    .typeError("The amount must be a number")
});

export const AddAccountModal = ({ open, handleClose }) => {
  const [colorOptions, setColorOptions] = useState();
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: schema,
    defaultValues: {
      name: "",
      color: "",
      initial_balance: 0
    },
    reValidateMode: "onBlur"
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({ titleBackground: theme.palette.primary });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/accounts/get-color-list/")
      .then(response => setColorOptions(response.data));
  }, []);

  const onSubmit = data => {
    axios
      .post("http://localhost:8000/api/accounts/", data)
      .then(response => {
        alert("Success!");
        handleClose();
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };

  if (!colorOptions) return <p>Loading...</p>;
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
          <Controller
            as={
              <TextField
                variant="outlined"
                margin="normal"
                select
                required
                fullWidth
                label="Color"
                error={!!errors.color}
                helperText={
                  errors.color
                    ? errors.color.message
                    : "Please select your currency"
                }
              >
                {colorOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    <div
                      className={classes.colorDisplay}
                      style={{ backgroundColor: `#${option.value}` }}
                    />
                  </MenuItem>
                ))}
              </TextField>
            }
            name="color"
            control={control}
          />

          <TextField
            error={!!errors.initial_balance}
            helperText={
              errors.initial_balance ? errors.initial_balance.message : ""
            }
            inputRef={register}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="initial_balance"
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
