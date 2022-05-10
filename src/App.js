import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ciao, mi chiamo <code>Mario</code> e sto studiando <code>React</code>.
          Come mai di disturbi?
        </p>
        <div>
        <Clock />
        <Clock />
        <Clock />
        </div>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mario & React
        </a>
      </header>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()};
  }
  componentDidMount(){

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }
  componentWillUnmount(){

    clearInterval(this.timerID);

  }
  tick(){
    this.setState( { date: new Date() } );
  }
  render(){
    return (
      <div>
        <h1>Ciao Mondo</h1>
        <h2>Sono le {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
/*
function Avatar(props){
  return (
    <img className='Avatar'
      src={props.utente.avatarUrl}
      alt={props.utente.nome}
      />
  );
}
function InfoUtente(props){
  return (
    <div className='InfoUtente'>
      <Avatar utente={props.utente} />
      <div className='InfoUtente-nome'>
        {props.utente.nome}
      </div>
    </div>
  );
}

function Commento(props){
  return (
    <div className="Commento">
     <InfoUtente utente={props.autore} />
      <div className='Commento-test'>
        {props.testo}
      </div>
      <div className='Commento-data'>
        {/*formatDate(props.data)}
        {props.data}
      </div>
    </div>
  );
}
*/
export default App;
