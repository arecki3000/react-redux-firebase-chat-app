import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Paper,
  Button,
  Box,
  List,
  TextField,
  ListItem,
  Divider
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import firebase from "../../config/firebaseConfig";

const Dashboard = ({ classes, logOut, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.history.push("/login");
      });
  };
  const chats = ["arek", "marek", "korda", "damian", "michal"];
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper className={classes.root}>
        <Box width={1 / 4} className={classes.chatsBox}>
          <Box height="85%" style={{ height: "85%", overflow: "auto" }}>
            <List>
              {chats.map((chat) => {
                return (
                  <div>
                    <ListItem button>{chat}</ListItem>
                    <Divider />
                  </div>
                );
              })}
            </List>
          </Box>
          <Box height="20%">
            <Button
              className={classes.button}
              fullWidth
              variant="text"
              color="secondary"
              onClick={(e) => handleClick(e)}
            >
              Log Out
            </Button>
          </Box>
        </Box>
        <Box width="100%" className={classes.oldMsgContainer}>
          <Box></Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default withStyles(styles)(Dashboard);
