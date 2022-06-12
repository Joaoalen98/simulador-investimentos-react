import './Resultados.scss';
import ResultadosSimulacao from '../../interfaces/ResultadosSimulacao';

interface Props {
    resultadosSimulacao: ResultadosSimulacao
}

function Resultados ({ resultadosSimulacao } : Props) {

    return (
        <article className="resultados">
            <h2 className="resultados__titulo">Resultados da simulação:</h2>
            <p className="resultados__informacao">
                Patrimônio Total: <span>R$ {resultadosSimulacao.patrimonioTotal.toFixed(2).replace('.',',')}</span>
            </p>
            <p className="resultados__informacao">
                Valor Investido: <span>R$ {resultadosSimulacao.valorInvestido.toFixed(2).replace('.',',')}</span>
            </p>
            <p className="resultados__informacao">
                Taxa Total Recebida: <span>R$ {resultadosSimulacao.lucroTotal.toFixed(2).replace('.',',')}</span>
            </p>
            <p className="resultados__informacao">
                Total Aportes: <span>R$ {resultadosSimulacao.aportesMensaisTotais.toFixed(2).replace('.',',')}</span>
            </p>
        </article>
    );
}

export default Resultados