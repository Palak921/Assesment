import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SingleJob from './containers/Jobs/SingleJob/SingleJob';

import Main from './containers/Main/Main';

class App extends Component {


  render() {
    return (
      <div>
        <Switch>
          <Route path='/jobs:id' exact component={SingleJob} />
          <Route path='/' exact component={Main} />
        </Switch>
      </div>


    );
  }
}


export default App;
