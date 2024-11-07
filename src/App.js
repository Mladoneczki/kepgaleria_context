
import './App.css';
import NagyKep from './components/NagyKep';
import KisKepek from './components/KisKepek';
import { KattContext } from './context/lepesContext';
import { useContext } from 'react';


function App() {
  const {lista,index} =useContext(KattContext)
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Whispers of Silence</h1>
      </header>
      <article>
        <div className="nagykep">
          <NagyKep kep={lista[index]}/>
        </div>
        <div className="kiskepek">
          <KisKepek lista={lista}/>
        </div>
      </article>
    </div>
  );
}

export default App;
