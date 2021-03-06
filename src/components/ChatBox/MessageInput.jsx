import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import { compose } from "redux";
import { connect } from "react-redux";
import { sendMessage } from "../../actions/msgActions";

const MessageInput = ({ classes, sendMessage, currentChatId }) => {
  const [text, setText] = useState({
    data: ""
  });

  const handleMessage = (e) => {
    e.preventDefault();
    if (
      currentChatId &&
      text.data &&
      currentChatId !== "F7gkj6AC6tQkCaEWQ9So"
    ) {
      sendMessage({ text, currentChatId });
      setText((prevState) => {
        return { ...prevState, data: "" };
      });
    } else {
      setText((prevState) => {
        return { ...prevState, data: "" };
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setText((prevState) => {
      return { ...prevState, data: value };
    });
  };

  return (
    <form onSubmit={(e) => handleMessage(e)} className={classes.messageInput}>
      <InputBase
        placeholder="Type something..."
        className={classes.inputContainer}
        value={text.data}
        onChange={(e) => handleChange(e)}
      />
      <IconButton type="submit" color="primary">
        <SendIcon />
      </IconButton>
    </form>
  );
};

MessageInput.propTypes = {
  classes: PropTypes.object,
  sendMessage: PropTypes.func,
  currentChatId: PropTypes.string
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (text) => dispatch(sendMessage(text))
  };
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(MessageInput);
