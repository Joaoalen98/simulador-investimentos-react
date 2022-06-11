import { useState } from 'react';
import './FormSimulador.scss';

interface DadosSimulcao {
    aporteInicial: number,
    aportesMensais: number,
    taxaAA: number,
    anos: number
}

function FormSimulador () {

    const [ dadosForm, setDadosForm ] = useState<DadosSimulcao>({
        aporteInicial: 0,
        aportesMensais: 0,
        taxaAA: 0,
        anos: 0
    })

    return(
        <form className="simulador__form">
            <h2 className="simulador__form--titulo">Digite as informações a seguir:</h2>
            <div className="input__container">
            <label htmlFor="aporte-incial">Aporte Incial</label>
                <input 
                    type="text" 
                    name="aporte-incial" 
                    id="aporte-incial" 
                />
            </div>
            <div className="input__container">
                <label htmlFor="aporte-incial">Aportes Mensais</label>
                <input type="text" name="aportes-mensais" id="aportes-mensais" />
            </div>
            <div className="input__container">
                <label htmlFor="aporte-incial">Taxa % A.A</label>
                <input type="text" name="taxaAA" id="taxaAA" />
            </div>
            <div className="input__container">
                <label htmlFor="aporte-incial">Anos</label>
                <input type="number" name="anos" id="anos" />
            </div>

            <button id="enviar-simulacao" className="simulador__form--submit">
                Simular
            </button>
          </form>
    );
}

export default FormSimulador