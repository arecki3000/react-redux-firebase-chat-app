import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { getInterlocutorId } from "../../actions/msgActions";
import { connect } from "react-redux";
import { compose } from "redux";

const Chat = ({ classes, user, chatId, setCurrentChat }) => {
  return (
    <React.Fragment>
      <ListItem
        button
        onClick={() => setCurrentChat(chatId)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    getInterlocutorId: (chatId) => dispatch(getInterlocutorId(chatId))
  };
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(Chat);
