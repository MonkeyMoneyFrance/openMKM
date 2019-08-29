import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import {decodeParams} from '../functions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchUser} from '../redux/actions'
import List from '../components/lists/users'
import Modal from '../components/modal/user'

const mapStateToProps = (state,props) => {
  const params = decodeParams(props.location.search) || {}
  const orderBy = params.orderBy || 'firstName'
  const order = (params.order || 1)
  return {
    users : state.users.sort((a,b)=>  {
      return (a[orderBy]||'').toLowerCase() >= (b[orderBy]||'').toLowerCase() ? 1*order : -1*order
      })
    }
};
const matchDispatchToProps = (dispatch) => bindActionCreators({requestFetchUser}, dispatch);

export function Users(props) {
  const [modalOpen , setModalOpen] = useState(false)
  const handleClick = (value) => props.history.push(`users/${value}/detail`);
  useEffect(()=>{
    props.requestFetchUser(decodeParams(props.location.search))
  },[])
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  return (
    <Main className={'main'}>
      <button onClick={openModal}>ADD</button>
      {modalOpen && <Modal close={closeModal} initialData={{}} /> }
      <List rowClicked={handleClick} id={'userList'} data={props.users}/>
    </Main>
  )
}
export default connect(mapStateToProps,matchDispatchToProps)(Users)
