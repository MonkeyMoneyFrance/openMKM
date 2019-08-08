import React , { useState, useEffect } from 'react';
import {Grid,Typography} from '@material-ui/core';
import GamesList from '../components/lists/games'
import { makeStyles , createMuiTheme , responsiveFontSizes} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  }
}));
function MySpace(props) {
    const [selected, setSelected] = useState([])
    const classes = useStyles();
    return (
      <Grid container component="main" className={classes.root}>
        <Typography>Mon Equipe</Typography>
        <GamesList history = {props.history} />
      </Grid>
)
}


export default MySpace;
