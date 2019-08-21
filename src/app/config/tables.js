export default  [
  {
    id:'userList',
    header:[
      {
      label:'Prenom',
      id:'firstName',
      path:['playedAt'],
      type:'string',
      default:true,
      },
      {
      label:'Nom',
      id:'lastName',
      path:['results.1.teamId',' ','results.1.result',' - ','results.0.result',' ','results.0.teamId'],
      type:'string'
      },
      {
      label:'License',
      id:'licence',
      path:['status'],
      type:'string'
      }]
  }
]
