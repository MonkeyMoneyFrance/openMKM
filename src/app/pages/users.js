import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import UsersList from '../components/lists/users'


export default function Users(props) {
  return (
    <Main className={'main'}>
      <div className={"header"}>
        <h2>Joueurs</h2>
        <p>Type de sport</p>
      </div>
      <UsersList history={props.history} />
    </Main>
  )
}
