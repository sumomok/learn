import React from 'react';
import Home from './page/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Option from './options';
import './assets/sass/index.scss';
import NotFindError from './page/404Error';
function App() {
  let ModeArray = Option.loginMode.map(((it, index) => <Route key={index} path={it.PageUrl} component={it.comp} />))
  return (
      <Router>
      <iframe title="device" src='/device/DeviceManager_1.html'></iframe>
        <Switch>
          {ModeArray}
          <Route path="/" exact component={Home}></Route>
          <Route path="*" component={NotFindError}></Route>
        </Switch>
      </Router>
  );
}

export default App;
