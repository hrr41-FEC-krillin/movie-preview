const styles = {
  modalDisplayBlock: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .6)",
    display: "block",
    zIndex: "1000"
  },
  modalDisplayNone: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .6)",
    display: "none",
    zIndex: "1000"
  },
  modalMain: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  parentDiv: {
    width: "825px",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "relative",
    marginBottom: "10px"
  },
  posterCriticContainer: {
    width: "825px",
    display: "flex",
    flexDirection: "row",
    marginTop: "10px"
  }
};

export default styles;
