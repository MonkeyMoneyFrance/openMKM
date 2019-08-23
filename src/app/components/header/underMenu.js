import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppUnderMenu} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"
import undermenus from '../../config/undermenus'

export default  function UnderMenu(props) {
  let undermenu = undermenus.find(h => (new RegExp(h.match)).test(props.pathname + (props.search || '')))
  if (!undermenu) return <div style={{paddingTop:50}}></div>
  return (
    <AppUnderMenu>
      {undermenu.title && <div><h2>{undermenu.title}</h2></div>}
      <nav className='navigator'>
        {(undermenu.menus||[]).map((e,i)=> (
            <LinkRouter key={i} to={e.href} >{e.label}</LinkRouter>
          )
        )}
       </nav>
    </AppUnderMenu>
  )
}
