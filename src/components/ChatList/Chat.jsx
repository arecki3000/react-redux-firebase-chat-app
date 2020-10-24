import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { setCurrentChat, createNewChat } from "../../actions/msgActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Chat = ({
  classes,
  user,
  interlocutorId,
  currentChatId,
  uid,
  chats,
  setCurrentChat,
  createNewChat,
  state
}) => {
  const handleClick = (interlocutorId, uid) => {
    if (chat) {
      setCurrentChat({ chatId, interlocutorId });
    } else {
      createNewChat({ chatId, uid, interlocutorId });
      setCurrentChat({ chatId, interlocutorId });
    }
  };

  const chatId =
    uid < interlocutorId
      ? `${uid}${interlocutorId}`
      : `${interlocutorId}${uid}`;
  const chat = chats && chats.find((chat) => chat.id === chatId);

  return (
    <React.Fragment>
      <ListItem
        button
        onClick={() => handleClick(interlocutorId, uid)}
        alignItems="center"
      >
        <ListItemText
          primary={user}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="caption"
                color="textSecondary"
                display="block"
              >
                {/* 10:25 */}
              </Typography>
              {chat && chat.lastMsg}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const chats = state.firestore.ordered.chats;
  const uid = state.firebase.auth.uid;
  const currentChatId = state.msg.currentChatId;

  return {
    state,
    uid,
    chats,
    currentChatId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChat: (chatId) => dispatch(setCurrentChat(chatId)),
    createNewChat: (newChat) => dispatch(createNewChat(newChat))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "chats",
      where: ["users", "array-contains", ownProps.uid]
    }
  ]),
  withStyles(styles)
)(Chat);
