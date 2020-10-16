import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Message = ({ classes, my }) => {
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
            Andrzj Karot
          </Typography>
          <Typography
            className={my ? classes.textMy : classes.text}
            display="block"
            variant="body1"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsa ratione eos? Corrupti aspernatur perferendis perspiciatis
            cumque velit praesentium similique?
          </Typography>
        </CardContent>
      </Card>
      <ListItemText secondary="10:25" />
    </ListItem>
  );
};

export default withStyles(styles)(Message);
