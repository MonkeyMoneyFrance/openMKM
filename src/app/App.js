import React , {useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import {login} from './utils/API'
import Home from './pages/home'
import routes from './config/routes'
import withAuth from './config/privateroute'
import withLayout from './config/publicRoute'
import withAdmin from './config/adminRoute'
import {Switch,Route} from 'react-router-dom'
import {requestProfile} from './redux/actions'
import {connect,useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

// function mapStateToProps(state){
//   return {}
// }
// function matchDispatchToProps(dispatch){
//   return bindActionCreators({requestProfile}, dispatch)
// }
function App(props) {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(requestProfile())
  },[])
  
  return (
    <div style={{minHeight:"100%"}}>
      <Switch>
        {routes.map((r,index) => 
          (
            <Route
              path={r.path}
              exact={r.exact}
              key = {index}
              component={r.private ? withAuth(r.main) : r.admin ? withAdmin(r.main)  : withLayout(r.main)}
            />
          )

       )}
      </Switch>
    </div>
  );
}

export default withRouter(App);
