import React , { useState, useEffect } from 'react';
import {Grid,Paper,Typography,TextField,Button} from '@material-ui/core';
import GameAvatar from '../components/avatars/game';
import Player from '../components/forms/players';
import Coach from '../components/forms/coach';
import ScheduleGame from '../components/forms/scheduleGame';
import Signatures from '../components/forms/signatures';
import Remarks from '../components/forms/remarks';
import Referee from '../components/forms/referee';
import { makeStyles , createMuiTheme , responsiveFontSizes} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {requestFetchGame} from '../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // backgroundColor:'white',
    borderRadius:'15px',
    padding: theme.spacing(1),
    margin: theme.spacing(1,0),
    paddingTop: theme.spacing(3),
  },
  main: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  left : {
  },
  textField : {
    margin : 0
  },
  button : {
    padding :theme.spacing(2),
    marginTop: theme.spacing(1),
  }
}));
function mapStateToProps(state,props){
  return {
    game : (state.games||[]).find(m => m._id == props.match.params.gameId)
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchGame},dispatch)
}
function Game(props) {
    const classes = useStyles();
    // <GameForm  {...props.game} />
    useEffect(()=> {
      if (!props.game) props.requestFetchGame({_id:props.match.params.gameId})
    }, [])
    return (
      <Grid container component="main" className={classes.root}>
        <GameAvatar  {...props.game}/>
        <Paper className={classes.main}>
        <Grid container >
          <Grid item xs={12} sm={6} className={classes.left}>
            <Coach />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Coach />
          </Grid>
        </Grid>
        </Paper>
        <Paper className={classes.main}>
        <Grid container >
          <Grid item xs={12} sm={6} className={classes.left}>
            <Player />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Player />
          </Grid>
        </Grid>
        </Paper>
        <Paper className={classes.main}>
          <ScheduleGame />
        </Paper>
        <Paper className={classes.main}>
          <Referee />
        </Paper>
        <Paper className={classes.main}>
          <Typography>Réclamations, reserves et observations AVANT, PENDANT et APRES la recontre</Typography>
          <Grid container >
            <Grid item xs={12} sm={6} >
              <Typography>Equipe A</Typography>
              <Remarks />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Equipe B</Typography>
              <Remarks />
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.main}>
          <Typography>SINATURES OBLIGATOIRES</Typography>
          <Signatures />
        </Paper>
        <Grid container justify='center'>
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            >
            Enregistrer
          </Button>
        </Grid>
      </Grid>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(Game);
