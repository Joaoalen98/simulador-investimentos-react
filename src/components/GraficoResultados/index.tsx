import BarraGrafico from './BarraGrafico';
import './GraficoResultados.scss';


interface Props {
    valoresPorMes: number[]
}

function GraficoResultados({ valoresPorMes }: Props) {

    const altura = 200
    const divisor = maiorValor(valoresPorMes) / altura

    function maiorValor (valoresPorMes: number[]){
        let maiorValor = 0;

        valoresPorMes.forEach(valor => {
            if(maiorValor < valor) {
                maiorValor = valor
            }
        })

        return maiorValor
    }

    return (  
        <div 
            className="grafico__resultados"
            style={{
                display: valoresPorMes.length > 0 ?
                    'flex' : 'none'
            }}    
        >
            <h2>Grafico:</h2>
            <div className="grafico__resultados__container">
                {
                    valoresPorMes.map((valor, index) => {
                        return (
                            <BarraGrafico
                                key={index}
                                divisor={divisor}
                                valor={valor}
                                valoresPorMes={valoresPorMes}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default GraficoResultados;