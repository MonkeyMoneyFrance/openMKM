import React , {useEffect,useState} from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {AppRoot,SlideMenu,HamburgerMenu,BackgroundSlider} from './header'
import {connect} from 'react-redux'
import src from "../../assets/logo_fsgt.png"
import headers from '../../config/headers'

function mapStateToProps(state){
  return {}
}
function PublicHeader(props) {
  const [menuStatus,setStatus] = useState('')
  const toggleMenu = () => setStatus(menuStatus === '' ? 'isopen' : '')

        return (
          <AppRoot className={"headerMenu"}>
              <BackgroundSlider onClick={toggleMenu} className={menuStatus} ></BackgroundSlider>
                <LinkRouter to='/' className="homeImg">
                <img src={src} alt="fsgt" />
                </LinkRouter>
                <nav className='navigator'>
                  {((headers.find(h => (new RegExp(h.match)).test(props.pathname)) || {}).menus||[]).map((e,i)=> (
                      <LinkRouter key={i} to={e.href} >{e.label}</LinkRouter>
                    )
                  )}
                 </nav>
                <HamburgerMenu onClick={toggleMenu} className={ menuStatus }><span></span><span></span><span></span><span></span></HamburgerMenu>
                <SlideMenu className={menuStatus} >
                  <ul>
                    {((headers.find(h => (new RegExp(h.match)).test(props.pathname)) || {}).menus||[]).map((e,i)=> (
                      <li key={i} >
                        <LinkRouter to={e.href} >{e.label}</LinkRouter>
                      </li>
                      )
                    )}
                  </ul>
               </SlideMenu>
          </AppRoot>

        )
}

export default connect(mapStateToProps)(PublicHeader);
