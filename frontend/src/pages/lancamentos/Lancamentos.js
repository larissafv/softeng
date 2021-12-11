import { useEffect, useState } from 'react';

import './Lancamentos.css';
import Sidebar from '../../dashboard/sidebar/Sidebar';

const Lancamentos = () => {
    
    const [lancamentos, setLancamentos] = useState([])
    
    useEffect(()=> {
        const loadData = () => {
            fetch('http://127.0.0.1:8000/api/lancamentos')
            .then(response => response.json())
            .then(data => setLancamentos(data))
        }
        loadData()
    }, [])

    return (
        <div className="container">
            <div className="lancamentos">
                <div className="flanc__container">

                {
                lancamentos.map( lancamento => (
                    <p key={lancamento.Id}> {lancamento.Descricao}  |  {lancamento.Valor} </p>
                ))}

        
                </div>
            </div>
            <Sidebar />
        </div>
    );
};

export default Lancamentos;