import React, { useState, useEffect, useRef } from "react";
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

const ChatBox = ({ classes, messages, uid }) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const dummyRef = useRef(null);

  useEffect(() => {
    if (dummyRef.current) {
      console.log(firstLoad);
      if (firstLoad) {
        dummyRef.current.scrollIntoView();
        setFirstLoad(false);
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
        <Typography>Andrzej Karot</Typography>
      </div>
      <List className={classes.list}>
        {messages &&
          messages.map((msg) => (
            <Message my={uid === msg.authorId} msg={msg} />
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

  return {
    messages,
    uid
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "msg",
      orderBy: ["date", "asc"]
    }
  ]),
  withStyles(styles)
)(ChatBox);
