import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";
import List from "@material-ui/core/List";
import MessageInput from "./MessageInput";

const ChatBox = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.friendInfo}>
        <IconButton className={classes.arrowBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography>Andrzej Karot</Typography>
      </div>
      <List className={classes.messagesBox}></List>
      <MessageInput />
    </div>
  );
};

export default withStyles(styles)(ChatBox);
