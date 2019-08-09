import React , { useState, useEffect } from 'react';

function TeamAvatar(props) {
    return (
      <div className='teamInfo'>
        <div className='container wrap'>
          <div style={{flex:3}}>
            <img  alt="complex" src="https://source.unsplash.com/random" />
          </div>
          <div style={{flex:9, padding:"0 1em"}}>
              <div>
                <h2>
                  {props.name}
                </h2>
                <h3>
                  SPORT : {props.licence}
                </h3>
                <h3>
                  DIVISION : {props.division}
                </h3>
              </div>
            </div>
        </div>
      </div>
      
    )
}


export default TeamAvatar;
