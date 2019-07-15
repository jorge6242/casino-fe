import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Casino Example
        </Typography>
        <Typography  variant="h5" component="h3">
          Build with:
        </Typography>
        <Typography component="h4"> - ReactJS </Typography>
        <Typography component="h4"> - Material UI </Typography>
        <Typography component="h4"> - Redux - Redux-Thunk </Typography>
        <Typography component="h4"> - React Hooks </Typography>
      </Paper>
    </div>
  );
}