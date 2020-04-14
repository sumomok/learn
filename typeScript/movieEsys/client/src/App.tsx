import React from 'react';
import { Layout } from './page/Layout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" component={Layout}></Route>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
