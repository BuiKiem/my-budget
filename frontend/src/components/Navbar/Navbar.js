import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  MenuList,
  Link,
  Hidden
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
        <Link variant="h6" color="inherit" component={RouterLink} to="/">
          My Budget
        </Link>
        <Hidden xsDown>
          <MenuList>
            <MenuItem>
              <Link component={RouterLink} to="/accounts/" color="inherit">
                Accounts
              </Link>
            </MenuItem>
          </MenuList>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
