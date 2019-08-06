import React , { useState, useEffect } from 'react';
import {Grid,Typography} from '@material-ui/core';
import TeamAvatar from '../components/avatars/team'
import MatchList from '../components/lists/users'
import { makeStyles , createMuiTheme , responsiveFontSizes} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1),
    overflowX: 'auto',
  }
}));
function MySpace(props) {
    const [selected, setSelected] = useState([])
    const classes = useStyles();
    return (
      <Grid container component="main" className={classes.root}>
        <TeamAvatar />
        <MatchList />
      </Grid>
)
}


export default MySpace;
