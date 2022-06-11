import React from 'react';
import FormSimulador from '../components/FormSimulador';
import Resultados from '../components/Resultados';
import './App.scss';

function App() {
  return (
      <div className="App">
        <header className="header">
          <h1 className="header__titulo">Simulador de investimentos</h1>
          <nav className="navegacao">
              <ul className="navegacao__lista">
                  <li className="navegacao__lista--item">
                      <a href="#" className="navegacao__lista--link">Histórico de simulações</a>
                  </li>
              </ul>
          </nav>
      </header>

      <main className="simulador">
        <FormSimulador />
        <Resultados/>
      </main>
    </div>
  );
}

export default App;
