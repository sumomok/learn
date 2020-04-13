import React from 'react';
import { Layout } from './page/Movie/Layout';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Layout}></Route>
      </Router>
    </div>
  );
}

export default App;
