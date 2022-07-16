import React, { useState } from 'react';

import './BarraGrafico.scss';
import formatarReal from '../../../functions/formatarReal';

interface Props {
    valor: number,
    divisor: number,
    valoresPorMes: number[],
}

function BarraGrafico({
    valor,
    divisor,
    valoresPorMes
} : Props) {

    const [displayInformacao, setDisplayInformacao] = useState<boolean>(false)

    return (  
        <div className='barra__grafico'
            style={{
            height: valor / divisor,
            width: `${100 / valoresPorMes.length}%`
            }} 
            onClick={() => {
                setDisplayInformacao(!displayInformacao)
            }}
            onMouseEnter={() => setDisplayInformacao(true)}
            onMouseOut={() => setDisplayInformacao(false)}
        >
            <p className='informacao__barra'
                style={{
                    display: displayInformacao ?
                        'block' : 'none'
                }}
            >
                {formatarReal(valor)}
            </p>
        </div>
    );
}

export default BarraGrafico;