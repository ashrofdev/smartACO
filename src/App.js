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
    fetch(`https://cors-anywhere.herokuapp.com/http://api.brainshop.ai/get?bid=8601&key=dtvRbKjZKR8GGZ4C&uid=67063&msg=${msg}`)
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


export default App