import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
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
import { setCurrentChat } from "../../actions/msgActions";

const ChatBox = ({
  classes,
  messages,
  uid,
  currentChatId,
  users,
  interlocutorId,
  setCurrentChat
}) => {
  const dummyRef = useRef(null);
  const firstLoad = useRef(true);
  const user = users ? users.filter((user) => user.id === interlocutorId) : "";
  const nick = user && user.length > 0 ? user[0].nick : "";

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

  const setCurrentChatToNull = () => {
    const chatId = null;
    const interlocutorId = null;

    setCurrentChat({ chatId, interlocutorId });
  };

  return (
    <div currentchatid={currentChatId} className={classes.root}>
      <div className={classes.friendInfo}>
        <IconButton
          onClick={() => setCurrentChatToNull()}
          className={classes.arrowBack}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography>{nick}</Typography>
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
      <MessageInput currentChatId={currentChatId} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const messages = state.firestore.ordered.chatMessages;
  const uid = state.firebase.auth.uid;
  const currentChatId = state.msg.currentChatId
    ? state.msg.currentChatId
    : "F7gkj6AC6tQkCaEWQ9So";
  const interlocutorId = state.msg.interlocutorId;
  const users = state.firestore.ordered.users;
  return {
    currentChatId,
    messages,
    uid,
    interlocutorId,
    users
  };
};

ChatBox.propTypes = {
  classes: PropTypes.object,
  messages: PropTypes.array,
  uid: PropTypes.string,
  currentChatId: PropTypes.string,
  users: PropTypes.array,
  interlocutorId: PropTypes.string,
  setCurrentChat: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChat: (chatId) => dispatch(setCurrentChat(chatId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "messages",
      doc: ownProps.currentChatId,
      subcollections: [{ collection: "message", orderBy: ["date", "asc"] }],
      storeAs: "chatMessages"
    },
    {
      collection: "users"
    }
  ]),
  withStyles(styles)
)(ChatBox);
