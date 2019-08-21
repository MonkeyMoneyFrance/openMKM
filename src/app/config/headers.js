export default  [
  {
    match:/^\/bo\//,
    menus:[
      {
      label:'Utilisateurs',
      undermenu:[{
        label:'Particuliers',
        href:'/bo/users?type=particular',
        accessLevel:10
        },
        {
        label:'Commercants',
        href:'/bo/users?type=professional',
        accessLevel:10
        },
        {
        label:'Membres Admins',
        href:'/bo/users?minAccessLevel=1',
        accessLevel:10
      }],
      },
      {
      label:'Groupes',
      href:'/bo/groups'
      },
    ],
    title : ''
  },
  {
    match:/^\/(games|profile|team|users)/,
    menus:[
      {
      label:'Derniers Matchs',
      href:'/games',
      accessLevel:10
      },
      {
      label:'Equipes',
      href:'/team',
      accessLevel:10
      },
      {
      label:'Mon Profil',
      href:'/profile',
      accessLevel:10
      }
    ],
    title : ''
  },
  {
    match:/^\/bo\/(user|users|games|profile|teams)/,
    menus:[
      {
      label:'Matchs',
      href:'/bo/games',
      accessLevel:10
      },
      {
      label:'Equipes',
      href:'/bo/teams',
      accessLevel:10
      },
      {
      label:'Joueurs',
      href:'/bo/users',
      accessLevel:10
      }
    ],
    title : ''
  }
]
