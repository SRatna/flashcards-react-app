import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Decks from './screens/Decks';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Decks} />
    </Switch>
  </Router>
);

export default App
