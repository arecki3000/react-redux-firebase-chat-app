import React, { useEffect, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";
import List from "@material-ui/core/List";
import MessageInput from "./MessageInput";
import Message from "./Message";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const ChatBox = ({ classes, messages, uid, chatId, users }) => {
  const dummyRef = useRef(null);
  const firstLoad = useRef(true);

  const chatName = users.filter((user) => user.id === chatId);

  useEffect(() => {
    if (dummyRef.current && messages) {
      if (firstLoad.current) {
        dummyRef.current.scrollIntoView();
        firstLoad.current = false;
      } else {
        dummyRef.current.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  }, [messages]);

  return (
    <div className={classes.root}>
      <div className={classes.friendInfo}>
        <IconButton className={classes.arrowBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography>{chatName ? chatName : ""}</Typography>
      </div>
      <List className={classes.list}>
        {messages &&
          messages.map((msg) => (
            <Message
              key={msg.id}
              my={uid === msg.authorId}
              time={msg.date}
              author={msg.authorId}
              data={msg.data}
            />
          ))}
        <div ref={dummyRef}></div>
      </List>
      <MessageInput />
    </div>
  );
};

const mapStateToProps = (state) => {
  const messages = state.firestore.ordered.msg;
  const uid = state.firebase.auth.uid;
  const chatId = state.msg.chatId;
  const users = state.firestore.ordered.users;

  return {
    chatId,
    messages,
    uid,
    users
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "msg",
      orderBy: ["date", "asc"]
    },
    {
      collection: "users",
      // doc: !ownProps.uid
      where: ["id", "!=", ownProps.uid]
    }
  ]),
  withStyles(styles)
)(ChatBox);
