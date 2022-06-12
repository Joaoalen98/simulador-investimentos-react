import React, { useState } from 'react';
import './App.scss';

import FormSimulador from '../components/FormSimulador';
import Resultados from '../components/Resultados';
import DadosSimulacao from '../interfaces/DadosForm';
import ResultadosSimulacao from '../interfaces/ResultadosSimulacao';


function App() {

  const [resultadosSimulacao, setResultadosSimulacao] = useState<ResultadosSimulacao>({
    lucroTotal: 0,
    aportesMensaisTotais: 0,
    patrimonioTotal: 0,
    valoresPorMes: []
  });

  const calcularRentabilidade = (dadosForm: DadosSimulacao) => {

    if (dadosForm.taxaAA <= 0) {
      alert('Preencha a taxa a.a com um valor válido!')
      return
    }

      const taxaMes = (dadosForm.taxaAA / 100) / 12;
      const totalMeses = dadosForm.anos * 12;
      
      let aportesMensaisTotais = 0;
      let valorAtual = dadosForm.aporteInicial
      let valoresPorMes = [
          
      ];
      
      let cont = 0
      while (cont < totalMeses) {
          valorAtual += dadosForm.aportesMensais + (valorAtual * taxaMes);
          valoresPorMes.push(valorAtual)
          
          aportesMensaisTotais += dadosForm.aportesMensais;
          cont ++
        }

      setResultadosSimulacao({
          lucroTotal: valorAtual - (dadosForm.aporteInicial + aportesMensaisTotais),
          aportesMensaisTotais,
          valoresPorMes,
          patrimonioTotal: valoresPorMes[valoresPorMes.length - 1]
      });
  }

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
        <FormSimulador
          calcularRentabilidade={calcularRentabilidade}
        />
        <Resultados
          resultadosSimulacao={resultadosSimulacao}
        />
      </main>
    </div>
  );
}

export default App;
