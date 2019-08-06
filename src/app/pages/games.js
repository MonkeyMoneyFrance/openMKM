import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import GameList from '../components/lists/games'


export default function Games(props) {
  const [selected, setSelected] = useState([])
  return (
    <Main className={'main'}>
      <h2>Derniers Matchs</h2>
      <GameList history={props.history} />
    </Main>
  )
}
