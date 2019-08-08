import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import TeamsList from '../components/lists/teams'


export default function Teams(props) {
  return (
    <Main className={'main'}>
      <div className={"header"}>
        <h2>Equipes</h2>
        <p>Type de sport</p>
      </div>
      <TeamsList history={props.history} />
    </Main>
  )
}
