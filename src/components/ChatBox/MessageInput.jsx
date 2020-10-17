import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import { compose } from "redux";
import { connect } from "react-redux";
import { sendMessage } from "../../actions/msgActions";

const MessageInput = ({ classes, sendMessage }) => {
  const [text, setText] = useState({
    data: ""
  });

  const handleMessage = () => {
    console.log(text);
    sendMessage(text);
    setText((prevState) => {
      return { ...prevState, data: "" };
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setText((prevState) => {
      return { ...prevState, data: value };
    });
  };

  return (
    <div className={classes.messageInput}>
      <InputBase
        multiline
        placeholder="Type something..."
        className={classes.inputContainer}
        value={text.data}
        onChange={(e) => handleChange(e)}
      />
      <IconButton onClick={() => handleMessage()} color="primary">
        <SendIcon />
      </IconButton>
    </div>
  );
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
