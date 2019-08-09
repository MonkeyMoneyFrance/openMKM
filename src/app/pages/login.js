import React , { useState, useEffect } from 'react';
import {login} from '../utils/API'
import {connect} from 'react-redux'
import {requestLogin} from '../redux/actions'
import {bindActionCreators} from 'redux'


function mapStateToProps(state){
  return {
    auth : state.auth
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({requestLogin}, dispatch)
}

function Login (props) {
    const [email, setMail] = useState();
    const [password, setPass] = useState();
    function tryLogin(){
      props.requestLogin({email,password})
    }
    useEffect(() => {
      if ((props.auth||{}).authenticated == 'AUTHENTICATED') window.location.href = '/games'
    });
    function submitHandler(e) {
        e.preventDefault();
        tryLogin()
    }
    return (
      <div className={'container wrap login'}>
        <div className='imageLeft' />
        <div className='loginForm' >
          <div style={{flex:1}}>
            <h5>
              Connexion
            </h5>
            <form  noValidate onSubmit={submitHandler} >
              <div>
                <input
                  required
                  id="email"
                  placeholder="Adresse Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange = {(e)=>setMail(e.target.value)}
                />
                </div>
                <div>
                <input
                    required
                    name="password"
                    placeholder="Mot de passe"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange = {(e)=>setPass(e.target.value)}
                  />
              </div>


            <div >
              <button
                type="submit"
                >
                  Soumettre
            </button>

            </div>

              <div>
                <div className='container forgotPass'>
                  <a href="#" >
                    Forgot password?
                  </a>
                </div>

              </div>
            </form>

          </div>
              {/* <LockOutlinedIcon /> */}


        </div>
      </div>
      )
    }
export default connect(mapStateToProps,matchDispatchToProps)(Login)
