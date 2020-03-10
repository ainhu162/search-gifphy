import React from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showContentMenus = (routes) =>{
  let result = null;
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
          <ToastContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;
