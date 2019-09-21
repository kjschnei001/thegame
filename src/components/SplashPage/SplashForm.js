import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
});

function SplashForm(props) {
  const { classes } = props;

  return (
    <Grid   
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Button 
            variant="contained"
            color="primary"
            className={classes.button}
          >
            NEW GAME
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            JOIN GAME
          </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SplashForm);