export default  [
  {
    path : '/',
    main: require('../pages/login').default,
    exact:true
  },
  {
    path : '/home',
    main: require('../pages/home').default,
    exact:true
  },
  {
    path : '/login',
    main : require('../pages/login').default,
    exact:true
  },
  {
    path : '/profile',
    main: require('../pages/profile').default,
    private : true,
    exact:true
  },
  {
    path : '/bo/publicPlaces',
    main: require('../pages/publicPlaces').default,
    exact:true,
    admin : true,
  },
  {
    path : '/bo/publicPlaces/:publicPlaceId/detail',
    main: require('../pages/publicPlace').default,
    admin : true,
  },
  {
    path : '/bo/publicPlaces/:publicPlaceId/finance',
    main: require('../pages/finance').default,
    admin : true,
  },
  {
    path : '/bo/publicPlaces/:publicPlaceId/members',
    main: require('../pages/users').default,
    admin : true,
  },
  {
    path : '/bo/users',
    main: require('../pages/users').default,
    exact:true,
    admin : true,
  },
  {
    path : '/bo/users/:userId/detail',
    main: require('../pages/user').default,
    admin : true,
    exact:true,
  },
  {
    path : '/bo/users/:userId/finance',
    main: require('../pages/finance').default,
    admin : true,
    exact:true,
  },
  {
    path : '/bo/users/:userId/cotisation',
    main: require('../pages/cotisation').default,
    admin : true,
    exact:true,
  },
  {
    path : '/bo/users/:userId/publicPlaces',
    main: require('../pages/publicPlaces').default,
    admin : true,
    exact:true,
  },
  {
    path : '/bo/groups',
    main: require('../pages/groups').default,
    admin : true,
    exact:true,
  },
  {
    path : '/bo/groups/:groupId/detail',
    main: require('../pages/group').default,
    admin : true,
  },
  {
    path : '/bo/groups/:groupId/finance',
    main: require('../pages/finance').default,
    admin : true,
  },
  {
    path : '/bo/groups/:groupId/members',
    main: require('../pages/users').default,
    admin : true,
  }

]
