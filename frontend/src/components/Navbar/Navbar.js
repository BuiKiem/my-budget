import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  MenuList,
  Link
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">My Budget</Typography>
        <MenuList>
          <MenuItem>
            <Link component={RouterLink} to="/accounts/" color="inherit">
              Accounts
            </Link>
          </MenuItem>
        </MenuList>
      </Toolbar>
    </AppBar>
  );
};
