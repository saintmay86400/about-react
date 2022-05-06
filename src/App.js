import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ciao, mi chiamo <code>Mario</code> e sto studiando <code>React</code>.
          Come mai di disturbi?
        </p>
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
        {/*formatDate(props.data)*/}
        {props.data}
      </div>
    </div>
  );
}
export default App;
