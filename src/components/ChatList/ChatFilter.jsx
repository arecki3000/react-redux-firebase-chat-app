import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const ChatFilter = ({ classes }) => {
  return (
    <div className={classes.filter}>
      <InputBase
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="action" fontSize="small" />
          </InputAdornment>
        }
        className={classes.inputContainer}
      />
    </div>
  );
};

export default withStyles(styles)(ChatFilter);
