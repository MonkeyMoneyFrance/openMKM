import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppRoot,SlideMenu,HamburgerMenu,BackgroundSlider} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"


function AdminHeader() {
  const [menuStatus,setStatus] = useState('')
  const [size,changeSize] = useState(0)
  const toggleMenu = () => setStatus(menuStatus === '' ? 'isopen' : '')
  const updateWindowDimensions = () => {
    changeSize(window.innerHeight)
  }
  window.addEventListener('resize', updateWindowDimensions);
  return (
    <AppRoot className={"headerMenu"}>
        <BackgroundSlider onClick={toggleMenu} className={menuStatus} ></BackgroundSlider>
          <LinkRouter to='/' className="homeImg">
          <img src={src} alt="fsgt" />
          </LinkRouter>
          {size > 768 ?
            <nav className='navigator'>
                <LinkRouter to='/bo/games' >Matchs</LinkRouter>
              <LinkRouter to='/bo/teams' >Equipes</LinkRouter>
                <LinkRouter to='/bo/users' >Joueurs</LinkRouter>
             </nav>
          :
            <HamburgerMenu
              onClick={toggleMenu}
              className={ menuStatus }><span></span><span></span><span></span><span></span></HamburgerMenu>
          }
          <SlideMenu className={menuStatus}>
           <ul>
             <li >
               <LinkRouter to='/bo/games' >Matchs</LinkRouter>
             </li>
             <li >
               <LinkRouter to='/bo/teams' >Equipes</LinkRouter>
             </li>
             <li >
               <LinkRouter to='/bo/users' >Joueurs</LinkRouter>
             </li>
           </ul>
         </SlideMenu>
    </AppRoot>





  )
}

export default AdminHeader;
