import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ChatFilter from "./ChatFilter";
import Chat from "./Chat";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";
import { compose } from "redux";
// import { Redirect } from "react-redux";

const ChatList = ({ classes, signOut }) => {
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

  // console.log("state", state);

  // if (uid) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className={classes.root}>
      <ChatFilter />

      <List className={classes.list}>
        {chats.map((chat, index) => {
          return <Chat key={index} />;
        })}
      </List>
      <Button
        onClick={signOut}
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(ChatList);
