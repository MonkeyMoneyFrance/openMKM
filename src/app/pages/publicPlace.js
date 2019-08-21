import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import UserAvatar from '../components/avatars/user'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchUser} from '../redux/actions';

function mapStateToProps(state,props){
  return {
    user : (state.users||[]).find(g => g._id == props.match.params.userId)
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchUser},dispatch)
}
function User(props) {
  useEffect(()=> {
    if (!props.user) props.requestFetchUser({_id:props.match.params.userId})
  }, [])
    return (
      <Main className={'main'}>
        <UserAvatar user={props.user} />
      </Main>
)
}

export default connect(mapStateToProps,matchDispatchToProps)(User)
