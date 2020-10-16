import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const ChatList = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.filter}>
        <InputBase
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
          className={classes.inputContainer}
        />
      </div>

      <List className={classes.list}></List>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        disableElevation
      >
        Log Out
      </Button>
    </div>
  );
};

export default withStyles(styles)(ChatList);
