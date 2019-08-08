import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppRoot} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"
function mapStateToProps(state){
  return {}
}
function PublicHeader() {

        return (
          <AppRoot className={"headerMenu"}>
                <LinkRouter to='/'>
                <img src={src} alt="fsgt" />
                </LinkRouter>


              <nav className='navigator'>

                  <LinkRouter to='/games' >Matchs</LinkRouter>
                  <LinkRouter to='/team' >Equipe</LinkRouter>
                  <button >
                    <LinkRouter to='/profile' >Mon Profil</LinkRouter>
                  </button>
               </nav>
          </AppRoot>

        )
}

export default connect(mapStateToProps)(PublicHeader);
