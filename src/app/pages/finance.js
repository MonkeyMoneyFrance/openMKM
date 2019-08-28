import React , { useState, useEffect } from 'react';
import {Main} from './layout'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestCotisations,setCotisation} from '../redux/actions'
import Modal from '../components/modal/cotisations'
export const mapStateToProps = (state,props) => {
  return {
    transactions : ((state.transactions || []).find(u => u._id == props.match.params.userId)||{}).cotisations || []
  }
}
const matchDispatchToProps = (dispatch) => bindActionCreators({requestCotisations,setCotisation},dispatch)

export function Finance(props) {
    useEffect(()=>{
      props.requestCotisations([{_id:props.match.params.userId}])
    },[])
    const [modalOpen , setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)
    const setCotisation = (form) => props.setCotisation([form])
    return (
    <div>
      <h2>Cotisations</h2>
      <button onClick={openModal}>Ajouter une Cotisation</button>
      {modalOpen && <Modal close={closeModal} setCotisation={setCotisation} /> }
      <div>
        {(props.cotisations||[]).map((e,i)=>
          <span key={e._id}>{e.start}</span>
        )}
      </div>
    </div>
  )
}


export default connect(mapStateToProps,matchDispatchToProps)(Finance);
