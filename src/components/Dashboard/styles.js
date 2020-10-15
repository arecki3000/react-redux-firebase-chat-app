const styles = (theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)"
      // outline: "1px solid slategrey"
    }
  },
  root: {
    display: "flex",
    marginTop: theme.spacing(10),
    height: theme.spacing(48),
    padding: theme.spacing(3)
  },

  chatsBox: {
    width: "30%",
    marginRight: theme.spacing(3),
    visibilty: "hidden"
  },
  button: {}
});

export default styles;
