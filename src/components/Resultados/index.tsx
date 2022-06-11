import './Resultados.scss';

function Resultados () {
    return (
        <article className="resultados">
            <h2 className="resultados__titulo">Resultados da simulação:</h2>
            <p className="resultados__informacao">
                Total Resgatado: <span>R$ 0,00</span>
            </p>
            <p className="resultados__informacao">
                Taxa Total Recebida: <span>R$ 0,00</span>
            </p>
            <p className="resultados__informacao">
                Total Aportes: <span>R$ 0,00</span>
            </p>
        </article>
    );
}

export default Resultados