import React , { useState, useEffect } from 'react';
import './list.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchGame} from '../../redux/actions'

const rows = [
  createData('22 Juin 2019', [{teamId:"France",score:"3"},{teamId:"Angleterre",score:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",score:"3"},{teamId:"Angleterre",score:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",score:"3"},{teamId:"Angleterre",score:"0"}],"A venir"),
  createData('22 Juin 2019', [{teamId:"France",score:"3"},{teamId:"Angleterre",score:"0"}],"A venir")
];
function createData(playedAt, teams, status) {
  return { playedAt, teams, status };
}

function mapStateToProps(state) {
  return {
    games : state.games
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchGame}, dispatch)
}
function GamesList(props) {
    const handleClick = (value) => {
      props.history.push(`games/${value}`)
    }
    useEffect(()=>{
      props.requestFetchGame()
    },[])

    return (
      <div className={'lists'}>
          <table className={'table'}>
            <thead>
              <tr>
                <td >Date</td>
                <td >Equipe A</td>
                <td >Résultat</td>
                <td >Equipe B</td>
                <td >Statut</td>
            </tr>
            </thead>
            <tbody>
              {(props.games||rows).map((row,i)=> (
                <tr
                  onClick={event => handleClick(row._id)}
                  key={row._id || i}
                  >
                  <td>{row.playedAt}</td>
                  <td>{(row.teams[0]||{}).teamId}</td>
                <td >{(row.teams[0]||{}).score} - {(row.teams[1]||{}).score}</td>
                  <td >{(row.teams[1]||{}).teamId}</td>
                <td >{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(GamesList);
