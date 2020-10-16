import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ChatBox = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.friendInfo}></div>
    </div>
  );
};

export default withStyles(styles)(ChatBox);
