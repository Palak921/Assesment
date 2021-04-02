import './App.css';
import { Component } from 'react';
import SearchJob from './components/SearchJob/SearchJob';
import Fetch from './store/actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SearchJob /> */}
        <Fetch />
      </div>
    );
  }
}

export default App;
