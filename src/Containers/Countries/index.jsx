import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { getAll } from "../../Actions/countryActions";
import { updateModal } from "../../Actions/modalActions";
import { Grid } from "@material-ui/core";
import Progress from "../../Components/Progress";
import DataTable from "../../Components/DataTable";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  checkoutContainer: {
    textAlign: "right",
    marginTop: 20
  }
});

class Countries extends Component {
  componentWillMount() {
    this.props.getAll();
  }
  render() {
    const { countries, isLoading } = this.props;
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          Countries
        </Grid>
        <Grid item xs={12}>
          {isLoading ? <Progress /> : <DataTable rows={countries} />}
        </Grid>
      </Grid>
    );
  }
}

const mS = ({ countryReducer: { countries, isLoading } }) => ({
  countries,
  isLoading
});

const mD = {
  getAll,
  updateModal
};

export default connect(
  mS,
  mD
)(withStyles(styles)(Countries));
