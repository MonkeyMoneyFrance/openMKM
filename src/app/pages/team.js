import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import TeamAvatar from '../components/avatars/team'
import UserList from '../components/lists/users'

function Team(props) {
    return (
      <Main className={'main'}>
        <TeamAvatar />
        <UserList />
      </Main>
)
}


export default Team;
