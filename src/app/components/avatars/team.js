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

    function TeamAvatar = styled.div`
      display:flex;
      justify-content:space-between
      & > div {background-color:#FFFFFF;border-radius : 10px;
        box-shadow: 0 2px 4px 0 rgba(153,153,153,0.50);

}


export default TeamAvatar;
