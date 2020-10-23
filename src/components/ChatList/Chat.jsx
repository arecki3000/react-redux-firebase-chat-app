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
  setCurrentChat,
  uid,
  chats,
  createNewChat
}) => {
  const handleClick = (interlocutorId, uid) => {
    const chatId =
      uid < interlocutorId
        ? `${uid}${interlocutorId}`
        : `${interlocutorId}${uid}`;
    const chat = chats.find((chat) => chat.id === chatId);

    if (chat) {
      console.log("chat found");
    } else {
      console.log("bla");
      createNewChat({ chatId, uid, interlocutorId });
    }
    console.log({ chatId, chats, chat });
  };

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
              {/* {" — Ziobro, przestań mi rodzinę prześladować…"} */}
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

  return {
    state,
    uid,
    chats
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
