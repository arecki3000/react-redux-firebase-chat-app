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
import { firestoreConnect } from "react-redux-firebase";

const ChatList = ({ classes, signOut, users, uid, state }) => {
  return (
    <div className={classes.root}>
      <ChatFilter />
      <List className={classes.list}>
        {users &&
          users.map((user) => {
            return <Chat chatId={user.id} key={uid} user={user.nick} />;
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

const mapStateToProps = (state) => {
  const users = state.firestore.ordered.users;
  const uid = state.firebase.auth.uid;

  return {
    users,
    uid
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "users",
      // doc: !ownProps.uid
      where: ["id", "!=", ownProps.uid]
    }
  ]),
  withStyles(styles)
)(ChatList);
