import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import ChatList from "../ChatList/ChatList";
import ChatBox from "../ChatBox/ChatBox";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = ({ classes, uid }) => {
  if (!uid) {
    return <Redirect to="/login" />;
  }

  return (
    <Container component="main" maxWidth="lg">
      <Typography className={classes.root} component="div">
        <ChatList />
        <ChatBox />
      </Typography>
    </Container>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object,
  uid: PropTypes.string
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;

  return {
    uid
  };
};

export default compose(connect(mapStateToProps), withStyles(styles))(Dashboard);
