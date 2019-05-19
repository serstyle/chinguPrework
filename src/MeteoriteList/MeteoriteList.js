import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Preloader from '../Preloader/Preloader'
import Scroll from '../Scroll/Scroll'
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class MeteoriteList extends React.Component {

  render(){
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
        <Scroll>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell>ID</CustomTableCell>
                <CustomTableCell>Name Type</CustomTableCell>
                <CustomTableCell>Mass(g)</CustomTableCell>
                <CustomTableCell>Fall</CustomTableCell>
                <CustomTableCell>Year</CustomTableCell>
                <CustomTableCell>Latitude</CustomTableCell>
                <CustomTableCell>Longitude</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            {
                this.props.isPending?
                <Preloader style={{postion:'absolute', left:'45%'}}/>
                :
                !this.props.meteoriteArr?
                <TableRow>error oopsie</TableRow>:
                this.props.meteoriteArr.map(row => (
                <TableRow className={classes.row} key={row.id}>
                <CustomTableCell>{row.name}</CustomTableCell>
                <CustomTableCell>{row.id}</CustomTableCell>
                <CustomTableCell>{row.nametype}</CustomTableCell>
                <CustomTableCell>{row.mass}</CustomTableCell>
                <CustomTableCell>{row.fall}</CustomTableCell>
                <CustomTableCell>{row.year}</CustomTableCell>
                <CustomTableCell>{row.reclat}</CustomTableCell>
                <CustomTableCell>{row.reclong}</CustomTableCell>
                </TableRow>
            ))}
            </TableBody>
          </Table>
        </Scroll>
        </Paper>
      );
  }
}

MeteoriteList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeteoriteList);