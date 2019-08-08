import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import GameList from '../components/lists/games'


export default function Games(props) {
  const [selected, setSelected] = useState([])
  return (
    <Main className={'main'}>
      <div className={"header"}>
        <h2>Derniers Matchs</h2>
        <p>Type de sport</p>
      </div>

      <GameList history={props.history} />
    </Main>
  )
}
