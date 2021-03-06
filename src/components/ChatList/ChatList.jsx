import React, { useState } from "react";
import PropTypes from "prop-types";
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

const ChatList = ({ classes, signOut, users, uid, currentChatId }) => {
  const userWithoutAuthUser = users
    ? users.filter((user) => user.id !== uid)
    : [];

  const [filter, setFilter] = useState("");

  const usersToShow = userWithoutAuthUser.filter((user) =>
    user.nick.toLowerCase().includes(filter)
  );

  return (
    <div currentChatId={currentChatId} className={classes.root}>
      <ChatFilter
        filter={filter}
        handleFilter={(e) => setFilter(e.target.value)}
      />
      <List className={classes.list}>
        {usersToShow &&
          usersToShow.map((user) => {
            return (
              <Chat interlocutorId={user.id} key={user.id} user={user.nick} />
            );
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

ChatList.propTypes = {
  classes: PropTypes.object,
  signOut: PropTypes.func,
  users: PropTypes.array,
  uid: PropTypes.string,
  currentChatId: PropTypes.string
};

const mapStateToProps = (state) => {
  const users = state.firestore.ordered.users;
  const uid = state.firebase.auth.uid;
  const currentChatId = state.msg.currentChatId;

  return {
    currentChatId,
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
      collection: "users"
      // where: ["id", "!=", ownProps.uid]
    }
  ]),
  withStyles(styles)
)(ChatList);
