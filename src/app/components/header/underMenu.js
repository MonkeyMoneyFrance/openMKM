import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppUnderMenu} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"
import undermenus from '../../config/undermenus'

function PrivateHeader(props) {
  let undermenu = undermenus.find(h => (new RegExp(h.match)).test(props.pathname))
  if (!undermenu) return <div style={{paddingTop:50}}></div>
  return (
    <AppUnderMenu>
      <nav className='navigator'>
        {(undermenu.menus||[]).map((e,i)=> (
            <LinkRouter key={i} to={e.href} >{e.label}</LinkRouter>
          )
        )}
       </nav>
    </AppUnderMenu>
  )
}

export default PrivateHeader;
