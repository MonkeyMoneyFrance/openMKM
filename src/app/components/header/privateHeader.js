import React , {useEffect,useState} from 'react';
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
              <button >
                <LinkRouter to='/profile' >Mon Profil</LinkRouter>
              </button>

          </AppRoot>

        )
}

export default connect(mapStateToProps)(PublicHeader);
