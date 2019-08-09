import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import TeamAvatar from '../components/avatars/team'
import UserList from '../components/lists/users'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchTeam} from '../redux/actions';

function mapStateToProps(state,props){
  console.log(state.teams)
  return {
    team : (state.teams||[]).find(g => g.teamId == props.match.params.teamId)
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchTeam},dispatch)
}
function Team(props) {
    useEffect(()=> {
      if (!props.team) props.requestFetchTeam({_id:props.match.params.teamId})
    }, [])
    return (
      <Main className={'main'}>
        <TeamAvatar team={props.team} />
        <UserList history={props.history} teamId={props.match.params.teamId}/>
      </Main>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(Team);
