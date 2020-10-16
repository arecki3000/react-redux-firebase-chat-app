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
    borderBottom: `1px solid ${theme.palette.divider}`
  }
});

export default styles;
