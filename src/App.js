import React from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
 

const showContentMenus = (routes) =>{
  var result = null;
  if(routes.length > 0) {
    result = routes.map((route, index) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    })
  }
  return <Switch>{result}</Switch>
}
function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <div className="container">
          <div className="row">
            { showContentMenus(routes) }
          </div>
        <NotificationContainer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
