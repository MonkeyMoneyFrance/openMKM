export default  [
  {
    match:/^((\/bo)|)\/users\?type=particular/,
    title : 'Liste des Utilisateurs Particuliers'
  },
  {
    match:/^((\/bo)|)\/users\?type=professional/,
    title : 'Liste des Utilisateurs Professionnels'
  },
  {
    match:/^((\/bo)|)\/users\?minAccessLevel=/,
    title : 'Liste des Utilisateurs Administrateurs'
  },
  {
    match:/^((\/bo)|)\/users(?!\/)/,
    title : 'Liste des Utilisateurs'
  },
  {
    match:/^((\/bo)|)\/users\/\w+\/(detail|finance|cotisation|publicPlaces)$/,
    menus:[
      {
      label:'Informations',
      href:'detail',
      accessLevel:10
      },
      {
      label:'Inscription',
      href:'cotisation',
      accessLevel:10
      },
      {
      label:'Finances',
      href:'finance',
      accessLevel:10
      },
      {
      label:'Etablissements',
      href:'publicPlaces',
      accessLevel:10
      },
    ],
  },

  {
    match:/^((\/bo)|)\/groups\/\w+\/(detail|finance|members)$/,
    menus:[
      {
      label:'Informations Générales',
      href:'detail',
      accessLevel:10
      },
      {
      label:'Finance',
      href:'finance',
      accessLevel:10
      },
      {
      label:'Membres',
      href:'members',
      accessLevel:10
      }
    ],
    title : ''
  },
  {
    match:/^((\/bo)|)\/publicPlaces\/\w+\/(detail|finance|members)$/,
    menus:[
      {
      label:'Informations Générales',
      href:'detail',
      accessLevel:10
      },
      {
      label:'Finance',
      href:'finance',
      accessLevel:10
      },
      {
      label:'Membres',
      href:'members',
      accessLevel:10
      }
    ],
    title : ''
  },
  {
    match:/^((\/bo((\/public)|))|)\/users\/\w+\/(detail|teams|registrations)$/,
    menus:[
      {
      label:'Informations',
      href:'detail',
      accessLevel:10
      },
      {
      label:'Equipes',
      href:'teams',
      accessLevel:10
      },
      {
      label:'Adhesions',
      href:'registrations',
      accessLevel:10
      }
    ],
    title : ''
  }
]
