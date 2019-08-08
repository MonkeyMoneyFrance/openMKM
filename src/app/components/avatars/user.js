import React , { useState, useEffect } from 'react';

function UserAvatar(props) {
    return (
      <div className='userInfo'>
        <div className='container wrap' style={{height:"100%"}}>
          <div style={{flex:3}}>
            <img  alt="complex" src="https://source.unsplash.com/random" />
          </div>
          <div style={{flex:9, padding:"0 1em"}}>
              <div>
                <h2>
                  NOM COMPLET : {props.name}
                </h2>
                <h3>
                  SPORT : {props.sport}
                </h3>
                <h3>
                  LICENSE : {props.licence}
                </h3>
                <h3>
                  EQUIPE : {props.team}
                </h3>
              </div>
          </div>
          <div className={'button'} style={{}}>
            <button>Deconnexion</button>
          </div>
        </div>
      </div>
    )
}


export default UserAvatar;
