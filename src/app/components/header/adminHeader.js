import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppRoot} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"


function AdminHeader() {
        return (
          <AppRoot className={"headerMenu"}>
            <LinkRouter to='/' className="homeImg">
            <img src={src} alt="fsgt" />
            </LinkRouter>
            <nav className='navigator'>
              <LinkRouter to='/bo/games'>Matchs</LinkRouter>
              <LinkRouter to='/bo/teams'>Equipes</LinkRouter>
              <LinkRouter to='/bo/users'>Joueur</LinkRouter>
              <button >
                <LinkRouter to='/profile'>Mon Profil</LinkRouter>
              </button>
             </nav>
          </AppRoot>

        )
}

export default AdminHeader;
