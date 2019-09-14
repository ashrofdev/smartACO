import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: '',
      outcome: []
    }
  }
  

  render(){
    return (
      <div className="App">
        <div className="container">
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
