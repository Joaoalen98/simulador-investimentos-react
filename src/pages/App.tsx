import React, { useState } from 'react';
import './App.scss';

import FormSimulador from '../components/FormSimulador';
import Resultados from '../components/Resultados';
import DadosSimulacao from '../interfaces/DadosForm';
import ResultadosSimulacao from '../interfaces/ResultadosSimulacao';
import Header from '../components/Header';
import GraficoResultados from '../components/GraficoResultados';


function App() {

  const [resultadosSimulacao, setResultadosSimulacao] = useState<ResultadosSimulacao>({
    patrimonioTotal: Number(),
    valorInvestido: Number(),
    lucroTotal: Number(),
    aportesMensaisTotais: Number(),
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
          patrimonioTotal: valoresPorMes[valoresPorMes.length - 1],
          valorInvestido: dadosForm.aporteInicial + aportesMensaisTotais,
          lucroTotal: valorAtual - (dadosForm.aporteInicial + aportesMensaisTotais),
          aportesMensaisTotais,
          valoresPorMes,
      });
  }

  return (
    <div className="App">
      <Header />
      <main className="simulador">
        <FormSimulador
          calcularRentabilidade={calcularRentabilidade}
        />
        <Resultados
          {...resultadosSimulacao}
        />
      </main>
        <GraficoResultados
          valoresPorMes={resultadosSimulacao.valoresPorMes}
        />
    </div>
  );
}

export default App;
