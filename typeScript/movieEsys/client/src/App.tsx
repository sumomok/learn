import React from 'react';
import { Layout } from './page/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/index'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Layout}></Route>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;
