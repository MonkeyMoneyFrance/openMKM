import React , { useState, useEffect } from 'react';
import './list.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchUser} from '../../redux/actions'

const rows = [
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",result:"3"},{teamId:"Angleterre",result:"0"}],"A venir")
];
function createData(playedAt, users, status) {
  return { playedAt, users, status };
}

function mapStateToProps(state) {
  console.log(state.users)
  return {
    users : state.users
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchUser}, dispatch)
}
function UsersList(props) {
    const handleClick = (value) => {
      props.history.push(`users/${value}`)
    }
    useEffect(()=>{
      console.log('TEAMID IS ' , props.teamId)
      props.requestFetchUser(props.teamId ? {teamId:props.teamId} : {})
    },[])
    console.log(props.users)
    return (
      <div className={'lists'}>
          <table className={'table'}>
            <thead>
              <tr>
                <td>Prenom</td>
                <td>Nom</td>
                <td>Licence</td>
            </tr>
            </thead>
            <tbody>
              {(props.users||rows).map((row,i)=> (
                <tr
                  onClick={event => handleClick(row._id)}
                  key={row._id || i}
                  >
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.licence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(UsersList);
