import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "./Pagination";
import styles from "./style";
import { Grid } from "@material-ui/core";

/**
 * Class Generic DataTable
 */
class DataTable extends React.Component {
  state = {
    page: 0
  };

  /**
   * Handle to paginate
   */
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  /**
   * Handle to show rows per page
   */
  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const { classes, rows } = this.props;
    const { page } = this.state;
    const pagination = rows.length < 11 ? rows.length : 10;
    const emptyRows =
      pagination - Math.min(pagination, rows.length - page * pagination);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {rows
                .slice(page * pagination, page * pagination + pagination)
                .map(row => (
                  <TableRow
                    key={row.id}
                    className={classes.tableRow}
                  >
                    <TableCell component="th" scope="row">
                      <Grid item xs={12}>
                        {row.name}
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={pagination}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={Pagination}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

DataTable.propTypes = {
  /** Object styles of material UI */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);
