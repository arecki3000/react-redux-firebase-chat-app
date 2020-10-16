import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ChatFilter from "./ChatFilter";

import Chat from "./Chat";

const ChatList = ({ classes }) => {
  const chats = [
    {
      author: "Andrzej Karot",
      time: "10:26",
      msg: "— Ziobro, przestań mi rodzinę prześladować…"
    },
    {
      author: "Andrzej Karot",
      time: "10:26",
      msg: "— Ziobro, przestań mi rodzinę prześladować…"
    }
  ];
  return (
    <div className={classes.root}>
      <ChatFilter />

      <List className={classes.list}>
        {chats.map((chat, index) => {
          return <Chat key={index} />;
        })}
      </List>
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
