import { useState } from 'react';

import DadosSimulacao from '../../interfaces/DadosForm';
import './FormSimulador.scss';

interface Props {
    calcularRentabilidade: (dadosForm: DadosSimulacao) => void
}

function FormSimulador ({ calcularRentabilidade } : Props) {

    const dadosFormPadrao = {
        aporteInicial: 0,
        aportesMensais: 0,
        taxaAA: 0,
        anos: 0
    }

    const [ dadosForm, setDadosForm ] = useState<DadosSimulacao>(dadosFormPadrao);

    return(
        <form className="simulador__form">
            <h2 className="simulador__form--titulo">Digite as informações a seguir:</h2>
            <div className="input__container">
            <label htmlFor="aporte-incial">Aporte Incial</label>
                <input 
                    value={dadosForm.aporteInicial}
                    onChange={e => setDadosForm({
                        ...dadosForm,
                        aporteInicial: Number(e.currentTarget.value)
                    })}
                    type="text" 
                    name="aporte-incial" 
                    id="aporte-incial" 
                    pattern='([1-9])(\d+)'
                    required
                />
            </div>
            <div className="input__container">
                <label htmlFor="aporte-incial">Aportes Mensais</label>
                <input 
                    value={dadosForm.aportesMensais}
                    onChange={e => setDadosForm({
                        ...dadosForm,
                        aportesMensais: Number(e.currentTarget.value)
                    })}
                    type="text" 
                    name="aportes-mensais" 
                    id="aportes-mensais" 
                />
            </div>
            <div className="input__container">
                <label htmlFor="aporte-incial">Taxa % A.A</label>
                <input 
                    value={dadosForm.taxaAA}
                    onChange={e => setDadosForm({
                        ...dadosForm,
                        taxaAA: Number(e.currentTarget.value)
                    })}
                    type="text" 
                    name="taxaAA" 
                    id="taxaAA" 
                    pattern='([1-9])(\d+)'
                />
            </div>
            <div className="input__container">
                <label htmlFor="aporte-incial">Prazo (Anos)</label>
                <input 
                    value={dadosForm.anos}
                    onChange={e => setDadosForm({
                        ...dadosForm,
                        anos: Number(e.currentTarget.value)
                    })}
                    type="text" 
                    name="anos" 
                    id="anos" 
                    pattern='([1-9])(\d+)'
                />
            </div>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(calcularRentabilidade(dadosForm));
                }} 
                id="enviar-simulacao" className="simulador__form--submit"
            >
                Simular
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setDadosForm(dadosFormPadrao);
                }}
            >
                Limpar Formulário
            </button>
          </form>
    );
}

export default FormSimulador