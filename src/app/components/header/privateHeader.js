import React , {useEffect,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link as LinkRouter } from 'react-router-dom';

import {AppRoot} from './header'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {}
}
function PublicHeader() {

        return (
          <AppRoot className={"headerMenu"}>

              <h3 >
                <LinkRouter to='/'>FSGT</LinkRouter>
              </h3>

              <nav className='navigator'>
                <h4 >
                  <LinkRouter to='/games' >Matchs</LinkRouter>
                  <LinkRouter to='/team' >Equipe</LinkRouter>
               </h4>
               </nav>
              <button color="primary" variant="outlined" >
                <LinkRouter to='/profile' >Mon Profil</LinkRouter>
              </button>

          </AppRoot>

        )
}

export default connect(mapStateToProps)(PublicHeader);
