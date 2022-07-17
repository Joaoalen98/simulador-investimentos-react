import './Resultados.scss';

import ResultadosSimulacao from '../../interfaces/ResultadosSimulacao';
import formatarReal from '../../functions/formatarReal';
import { useRef } from 'react';

function Resultados ({ 
    patrimonioTotal,
    valorInvestido,
    lucroTotal,
    aportesMensaisTotais
 } : ResultadosSimulacao) {

    return (
        <article className="resultados">
            <h2 className="resultados__titulo">Resultados da simulação:</h2>
            <div 
                className='resultados__informacao'
            >
                <p>
                    Patrimônio Total: <span>{formatarReal(patrimonioTotal)}</span>
                </p>
                <p>
                    Valor Investido: <span>{formatarReal(valorInvestido)}</span>
                </p>
                <p>
                    Taxa Total Recebida: <span>{formatarReal(lucroTotal)}</span>
                </p>
                <p>
                    Total Aportes: <span>{formatarReal(aportesMensaisTotais)}</span>
                </p>
            </div>
        </article>
    );
}

export default Resultados