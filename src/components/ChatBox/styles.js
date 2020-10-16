const styles = (theme) => ({
  root: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("tablet")]: {
      maxWidth: "lg"
    }
  },
  friendInfo: {
    width: "100%",
    height: "70px",
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  arrowBack: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("tablet")]: {
      display: "none"
    }
  },
  messagesBox: {
    width: "100%",
    height: "calc(100% - 140px)"
  },
  messageInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "70px",
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2)
  },
  inputContainer: {
    opacity: "0.7",
    width: "90%",
    borderRadius: "10px",
    padding: theme.spacing(2),
    "&:hover": {
      opacity: "1"
    }
  },
  sendButton: {
    marginLeft: theme.spacing(2)
  },
  list: {
    height: "calc(100% - 140px)",
    width: "100%",
    overflow: "auto",
    padding: theme.spacing(2)
  }
});

export default styles;
