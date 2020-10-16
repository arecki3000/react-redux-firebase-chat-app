import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
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
