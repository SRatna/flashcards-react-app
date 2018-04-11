import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Decks from './screens/Decks';
import Cards from './screens/Cards';
import Practice from './screens/Practice';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Decks} />
      <Route exact path="/cards/:deckID" component={Cards} />
      <Route exact path="/practice/:deckID" component={Practice} />
    </Switch>
  </Router>
);

export default App
