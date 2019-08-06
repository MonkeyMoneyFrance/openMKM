import React , { useState, useEffect } from 'react';
import {Button,CssBaseline,Container,Grid,Typography,Paper,ButtonBase,FormControlLabel,Checkbox} from '@material-ui/core';
import { makeStyles , createMuiTheme , responsiveFontSizes} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin:'auto'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // image: {
  //   width: 128,
    // height: 300,
  // },
  img: {
    margin: 'auto',
    display: 'block',
    width: '100%',
    objectFit:'cover',
    height: 300,
  },
  infos : {
    padding: theme.spacing(1)
  }
}));
function Profile(props) {
    const [selected, setSelected] = useState([])
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://source.unsplash.com/random" />
            </ButtonBase>
          </Grid>
            <Grid xs={12} sm={9} container item direction="column"  >
              <Grid item xs className={classes.infos}>
                <Typography variant="body2" gutterBottom>
                  NOM COMPLET
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  LICENCE : 1030114
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  SPORT : FOOTBALL
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  EQUIPE : US_ENTEJFFD
                </Typography>
              </Grid>
              <Grid container item justify='flex-end' className={classes.infos}>
                <Typography variant="body2">
                  <Button color="primary" variant="outlined" >Deconnexion</Button>
                </Typography>
              </Grid>
            </Grid>

        </Grid>
      </Paper>
    </div>
)
}


export default Profile;
