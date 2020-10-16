import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

const MessageInput = ({ classes }) => {
  return (
    <div className={classes.messageInput}>
      <InputBase
        multiline
        placeholder="Type something..."
        className={classes.inputContainer}
      />
      <IconButton color="primary">
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(MessageInput);
