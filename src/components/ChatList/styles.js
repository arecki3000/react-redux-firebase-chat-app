const styles = (theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "none",
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("tablet")]: {
      width: "400px",
      display: "block"
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
    opacity: "0.7",
    width: "100%",
    background: theme.palette.grey[200],
    borderRadius: "10px",
    padding: theme.spacing(1),
    "&:hover": {
      opacity: "1"
    }
  },
  list: {
    height: "calc(100% - 140px)",
    width: "100%",
    overflow: "auto"
  },
  button: {
    width: "100%",
    height: "70px",
    borderRadius: "0"
  },
  listItem: {}
});

export default styles;
