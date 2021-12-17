import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/header';
import react, {useState} from 'react'
import Display from './components/DisplayMessage/Display';

function App() {
  const [displayMessage,setDisplayMessage] = useState('')
  const [wins,setWins] = useState(0)
  const [ties,setTies] = useState(0)
  const [losses,setLosses] = useState(0)
  return (
    <div className="App">
    <Header/>
     <Board 
     
     displayMessage={displayMessage} 
     setDisplayMessage={setDisplayMessage}
     wins={wins} setWins={setWins}
     ties={ties} setTies={setTies}
     losses={losses} setLosses={setLosses}
     
     />
     <Display 
     displayMessage={displayMessage} 
     wins={wins}
     ties={ties}
     losses={losses}

     />
    </div>
  );
}

export default App;
