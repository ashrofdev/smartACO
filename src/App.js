import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Content from './components/Content';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      msg: []
    }
  }
  
  componentDidMount() {
    window.addEventListener('keypress', (e)=>{
      if (e.key === 'Enter') {
        this.onChat()
      }
    })
  }

  onChat = async () => {
    document.querySelector('img').classList.add('show')
    const msg = document.querySelector('input').value
    fetch(`https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=${msg}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
        "x-rapidapi-key": "34857597femsh6ed6990c729453fp1fdddcjsn7a5471db02b3"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      document.querySelector('img').classList.remove('show')
      this.setState({msg: data.cnt})
      console.log(data)
    })
    .catch(err => {
      document.querySelector('img').classList.remove('show')
      this.setState({msg: 'Bad Internet'})
      console.log(err)
    });
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Content onChat={this.onChat} msg={this.state.msg}/>
        </div>
      </div>
    );
  }
}

export default App;
