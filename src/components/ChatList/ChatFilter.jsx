import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const ChatFilter = ({ classes, filter, handleFilter }) => {
  return (
    <div className={classes.filter}>
      <InputBase
        value={filter}
        onChange={handleFilter}
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="end">
            <SearchIcon color="action" fontSize="small" />
          </InputAdornment>
        }
        className={classes.inputContainer}
      />
    </div>
  );
};

export default withStyles(styles)(ChatFilter);
