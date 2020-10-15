import React from "react";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Paper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import styles from "./styles";

const Dashboard = ({ classes, uid }) => {
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper className={classes.root}>some text</Paper>
    </Container>
  );
};

export default withStyles(styles)(Dashboard);
