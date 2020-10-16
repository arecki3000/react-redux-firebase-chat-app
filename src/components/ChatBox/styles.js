const styles = (theme) => ({
  root: {
    height: "100%",
    width: "100%",
    background: "blue",
    [theme.breakpoints.up("tablet")]: {
      maxWidth: "lg"
    }
  }
});

export default styles;
