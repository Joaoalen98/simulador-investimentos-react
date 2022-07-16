import './Resultados.scss';
import ResultadosSimulacao from '../../interfaces/ResultadosSimulacao';
import formatarReal from '../../functions/formatarReal';

function Resultados ({ 
    patrimonioTotal,
    valorInvestido,
    lucroTotal,
    aportesMensaisTotais
 } : ResultadosSimulacao) {

    return (
        <article className="resultados">
            <h2 className="resultados__titulo">Resultados da simulação:</h2>
            <p className="resultados__informacao">
                Patrimônio Total: <span>{formatarReal(patrimonioTotal)}</span>
            </p>
            <p className="resultados__informacao">
                Valor Investido: <span>{formatarReal(valorInvestido)}</span>
            </p>
            <p className="resultados__informacao">
                Taxa Total Recebida: <span>{formatarReal(lucroTotal)}</span>
            </p>
            <p className="resultados__informacao">
                Total Aportes: <span>{formatarReal(aportesMensaisTotais)}</span>
            </p>
        </article>
    );
}

export default Resultados