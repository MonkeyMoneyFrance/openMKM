import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppRoot,BOMenu,SlideMenu,HamburgerMenu,BackgroundSlider} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"
import headers from '../../config/headers'

function AdminHeader(props) {
  const [menuStatus,setStatus] = useState('')
  const [undermenu,setUnderMenu] = useState(null)
  const toggleMenu = () => setStatus(menuStatus === '' ? 'isopen' : '')
  const header = (headers.find(h => (new RegExp(h.match)).test(props.pathname)) || {}).menus ||[]
  const menu = undermenu == null ? header : header[undermenu]['undermenu']

  return (
    <div>
      <BOMenu className={menuStatus} >
       <ul>
         {(undermenu != null) && (
           <li><a className={'link'} onClick={()=>setUnderMenu(null)}>Back</a></li>
         ) }
         {menu.map((e,i)=> (
           <li key={i} >
             {e.href ? <LinkRouter className={'link'} to={e.href} >{e.label}</LinkRouter>
              :
              <a onClick={()=>setUnderMenu(i)}>{e.label}</a>
            }
           </li>
           )
         )}
       </ul>
     </BOMenu>
      <AppRoot className={"headerMenu"}>
          <BackgroundSlider onClick={toggleMenu} className={menuStatus} ></BackgroundSlider>
            <LinkRouter to='/' className="homeImg">
            <img src={src} alt="fsgt" />
            </LinkRouter>
            <HamburgerMenu
                onClick={toggleMenu}
                className={ menuStatus }><span></span><span></span><span></span><span></span></HamburgerMenu>


      </AppRoot>
    </div>






  )
}

export default AdminHeader;
