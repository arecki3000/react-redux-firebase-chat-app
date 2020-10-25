import React from "react";
import PropTypes from "prop-types";
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

ChatFilter.propTypes = {
  classes: PropTypes.object,
  filter: PropTypes.string,
  handleFilter: PropTypes.func
};

export default withStyles(styles)(ChatFilter);
