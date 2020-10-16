import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import ChatList from "../ChatList/ChatList";

const Dashboard = ({ classes }) => {
  // const handleClick = (e) => {
  //   e.preventDefault();
  // };
  // const chats = ["arek", "marek", "korda", "damian", "michal"];
  return (
    <Container component="main" maxWidth="lg">
      <Typography
        className={classes.root}
        component="div"
        style={{ height: "100vh" }}
      >
        <ChatList />
      </Typography>
    </Container>
  );
};

export default withStyles(styles)(Dashboard);
