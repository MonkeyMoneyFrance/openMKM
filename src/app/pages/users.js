import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import {decodeParams} from '../functions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchUser} from '../redux/actions'
import List from '../components/lists/users'

const mapStateToProps = (state) => {
  return {
    users : state.users
  }
};
const matchDispatchToProps = (dispatch) => bindActionCreators({requestFetchUser}, dispatch);

function Users(props) {
  const handleClick = (value) => props.history.push(`users/${value}/detail`);
  useEffect(()=>{
    props.requestFetchUser(decodeParams(props.location.search))
  },[])
  return (
    <Main className={'main'}>
      <List rowClicked={handleClick} id={'userList'} data={props.user}/>
    </Main>
  )
}
export default connect(mapStateToProps,matchDispatchToProps)(Users)
