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
                    labels: valoresPorMes,
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
