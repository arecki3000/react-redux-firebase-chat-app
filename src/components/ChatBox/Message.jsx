import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";

const Message = ({ classes, my, data, author, time }) => {
  return (
    <ListItem
      className={my ? classes.messageContainerMy : classes.messageContainer}
    >
      <Card className={my ? classes.messageCardMy : classes.messageCard}>
        <CardContent>
          <Typography
            style={{ fontSize: "0.8rem" }}
            color="textSecondary"
            variant="body2"
          >
            {author}
          </Typography>
          <Typography
            className={my ? classes.textMy : classes.text}
            display="block"
            variant="body1"
          >
            {data}
          </Typography>
        </CardContent>
      </Card>
      <ListItemText secondary={time ? moment(time.toDate()).calendar() : ""} />
    </ListItem>
  );
};

export default withStyles(styles)(Message);
