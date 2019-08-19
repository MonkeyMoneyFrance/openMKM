import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppRoot,SlideMenu,HamburgerMenu,BackgroundSlider} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"


function PrivateHeader() {
  const [menuStatus,setStatus] = useState('')
  const toggleMenu = () => setStatus(menuStatus === '' ? 'isopen' : '')

  return (
    <AppRoot className={"headerMenu"}>
        <BackgroundSlider onClick={toggleMenu} className={menuStatus} ></BackgroundSlider>
          <LinkRouter to='/' className="homeImg">
          <img src={require(`../../assets/logo_fsgt.png`)} alt="fsgt" />
          </LinkRouter>
            <nav className='navigator'>
                <LinkRouter to='/games' >Matchs</LinkRouter>
                <LinkRouter to='/team' >Mon Equipe</LinkRouter>
                <button >
                  <LinkRouter to='/profile' >Mon Profil</LinkRouter>
                </button>
             </nav>
          <HamburgerMenu onClick={toggleMenu} className={ menuStatus }><span></span><span></span><span></span><span></span></HamburgerMenu>
          <SlideMenu className={menuStatus} >
           <ul>
             <li >
               <LinkRouter to='/games' >Matchs</LinkRouter>
             </li>
             <li >
               <LinkRouter to='/team' >Mon Equipe</LinkRouter>
             </li>
             <li >
               <LinkRouter to='/profile' >Mon Profil</LinkRouter>
             </li>
           </ul>
         </SlideMenu>
    </AppRoot>





  )
}

export default PrivateHeader;
