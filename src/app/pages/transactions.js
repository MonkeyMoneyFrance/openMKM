import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import {decodeParams} from '../functions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchTransaction} from '../redux/actions'
import Buttons from '../components/buttons/generic'
import List from '../components/lists/users'
import Modal from '../components/modal/transaction'

const mapStateToProps = (state,props) => {
  return {
    transactions : state.transactions || []
   }
};
const matchDispatchToProps = (dispatch) => bindActionCreators({requestFetchTransaction}, dispatch);

export function Transactions(props) {
  const [modalOpen , setModalOpen] = useState(null)
  const handleClick = (value) => props.history.push(`users/${value}/detail`);
  useEffect(()=>{
    props.requestFetchTransaction({...props.match.params,...decodeParams(props.location.search)})
  },[])
  const openModal = (name) => setModalOpen(name)
  const closeModal = () => setModalOpen(null)

  return (
    <Main className={'main'}>
      <Buttons id={'transactionListUser'} onClick={openModal}/>
      {modalOpen && <Modal name={modalOpen} close={closeModal} /> }
      <List rowClicked={handleClick} id={'transactionList'} data={
        (props.transactions||[]).filter(t =>
        [t.from,t.to].some(key => [props.match.params.userId,props.match.params.publicPlaceId,props.match.params.groupId].includes(key))) || []
      }/>
    </Main>
  )
}
export default connect(mapStateToProps,matchDispatchToProps)(Transactions)
