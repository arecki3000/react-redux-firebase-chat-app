const styles = (theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: (props) => (props.currentChatId ? "block" : "none"),
    [theme.breakpoints.up("tablet")]: {
      maxWidth: "lg",
      display: (props) => "block"
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
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  messageCard: {
    borderRadius: "20px",
    borderBottomLeftRadius: "0",
    maxWidth: "80%",
    background: theme.palette.grey[200]
  },
  messageContainerMy: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  messageCardMy: {
    borderRadius: "20px",
    borderBottomRightRadius: "0",
    maxWidth: "80%",
    background: theme.palette.info.light
  },
  text: {
    fontSize: "0.9rem",
    color: theme.palette.text.primary
  },
  textMy: {
    fontSize: "0.9rem",
    color: theme.palette.info.contrastText
  }
});

export default styles;
