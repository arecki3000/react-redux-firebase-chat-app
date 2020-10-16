const styles = (theme) => ({
  root: {
    height: "100%",
    width: "100%",
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("tablet")]: {
      width: "300px"
    }
  },
  filter: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "70px",
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2, 2)
  },
  inputContainer: {
    width: "100%",
    background: theme.palette.grey[200],
    borderRadius: "10px",
    padding: theme.spacing(1)
  },
  list: {
    height: "calc(100% - 140px)",
    width: "100%"
  },
  button: {
    width: "100%",
    height: "70px",
    borderRadius: "0"
  },
  listItem: {}
});

export default styles;
