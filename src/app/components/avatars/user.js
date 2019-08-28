import React , { useState, useEffect } from 'react';
import styled from 'styled-components'
import edit from '../../assets/edit.svg'
import Modal from '../modal/edituser'

import SVG from 'react-inlinesvg';

const Icon = styled.div`
  cursor: pointer;
  width:30px;
  fill:gray;
  position: absolute;
  right:5px;
  top:5px;
  transition: all 200ms ease-out
  &:hover {
    fill:black;
  }
`

function UserAvatar(props) {
    const [modalOpen , setModalOpen] = useState(false)

    const {firstName,lastName,address,phone} = props.user || []
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return (
      <div className='userInfo'>
        <Icon onClick={openModal}><SVG src={edit} /></Icon>
        <div className='container wrap' style={{height:"100%"}}>
          <div style={{flex:3}}>
            <img  alt="complex" src="https://source.unsplash.com/random" />
          </div>
          <div style={{flex:9, padding:"1em",height:"100%"}}>

            {modalOpen && <Modal initialData={props.user} close={closeModal} /> }
              <div>
                <h2>
                  NOM COMPLET : {firstName} {lastName}
                </h2>
                <h3>
                  Addresse : {address}
                </h3>
                <h3>
                  Téléphone : {phone}
                </h3>
              </div>

          </div>
          {props.isSelf &&
            <div className={'button'} style={{}}>
              <button>Deconnexion</button>
            </div>
          }
        </div>
      </div>
    )
}


export default UserAvatar;
