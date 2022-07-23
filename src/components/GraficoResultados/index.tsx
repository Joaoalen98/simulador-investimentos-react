import './GraficoResultados.scss';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


interface Props {
    valoresPorMes: number[]
}

function GraficoResultados({ valoresPorMes }: Props) {

    function legendaBarras (valoresPorMes: number[]) {
        let legendas: string[] = [];

        for (let i = 1; i <= valoresPorMes.length; i++) {
            legendas.push(`${i}° Mês`)
        }

        return legendas
    }

    return (
        <div className='grafico__resultados'>
            <Bar
                style={{
                    display: valoresPorMes.length === 0 ?
                        'none' : 'block'
                }}
                options={{
                    responsive: true,
                }}
                data={{
                    labels: legendaBarras(valoresPorMes),
                    datasets: [
                        {
                            label: 'Patrimônio Total',
                            data: valoresPorMes,
                            borderColor: 'darkblue',
                            backgroundColor: 'hotpink',
                        }
                    ]
                }}
            />
        </div>
    )
}

export default GraficoResultados;
