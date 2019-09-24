export default  [
  {
    id:'transactionListUser',
    button:[
      {
        label:'Transaction vers un Particulier',
        path:'User',
        className:'',
        accessLevel:1
      },
      {
        label:'Transaction vers un Etablissement',
        path:'PublicPlace',
        accessLevel:1
      },
      {
        label:'Transaction vers un Groupe',
        path:'Group',
        accessLevel:1
      }
    ]
  }
]
