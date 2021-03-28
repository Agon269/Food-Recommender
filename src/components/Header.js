import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchIcon from "@material-ui/icons/Search";
export default function ElevateAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Find the food that suits you</Typography>
          <SearchIcon style={{ marginLeft: "10px" }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
