import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Chat = ({ classes }) => {
  return (
    <React.Fragment>
      <ListItem button alignItems="center">
        <ListItemText
          primary="Andrzej Karrot"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="caption"
                color="textSecondary"
                display="block"
              >
                10:25
              </Typography>
              {" — Ziobro, przestań mi rodzinę prześladować…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
};

export default withStyles(styles)(Chat);
