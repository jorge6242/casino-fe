import { deepPurple } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  },
  tableRow: {
    cursor: "pointer"
  },
  message: {
    fontSize: "12px",
    width: "100px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  avatar: {
    margin: "0 auto",
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  [theme.breakpoints.only('xs')]: {
    table: {
      minWidth: 100,
    },
  },
});

export default styles;
