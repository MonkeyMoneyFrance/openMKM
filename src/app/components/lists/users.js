import React , { useState, useEffect } from 'react';
import './list.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {requestFetchGame} from '../../redux/actions'

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
  return {
    users : state.users
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({requestFetchGame}, dispatch)
}
function UsersList(props) {
    const [selected, setSelected] = useState([])

    const handleClick = (value) => {
      props.history.push(`users/${value}`)
    }
    useEffect(()=>{
      !props.users ? props.requestFetchGame() : void 0
    },[])

    return (
      <div className={'lists'}>
          <table className={'table'}>
            <thead>
              <tr>
                <td >Nom</td>
                <td >Ligue</td>
                <td >Categorie</td>

            </tr>
            </thead>
            <tbody>
              {(rows).map((row,i)=> (
                <tr
                  onClick={event => handleClick(i)}
                  key={i}
                  >
                  <td>{row.playedAt}</td>
                  <td>{(row.users[0]||{}).teamId}</td>
                  <td >{(row.users[0]||{}).result} - {(row.users[1]||{}).result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
)
}


export default connect(mapStateToProps,matchDispatchToProps)(UsersList);
