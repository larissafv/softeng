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
    
    const [aux_categorias, setCategoria] = useState([])
    useEffect(()=> {
        const loadData = () => {
            fetch('http://127.0.0.1:8000/api/categorias')
            .then(response => response.json())
            .then(data => setCategoria(data))
        }
        loadData()
    }, [])
    var categorias = {}
    aux_categorias.map( aux => (
        categorias[aux.Id] = aux.Titulo
    ))
    
    const [aux_pagamentos, setPagamentos] = useState([])
    useEffect(()=> {
        const loadData = () => {
            fetch('http://127.0.0.1:8000/api/pagamentos')
            .then(response => response.json())
            .then(data => setPagamentos(data))
        }
        loadData()
    }, [])
    var pagamentos = {}
    aux_pagamentos.map( aux => (
        pagamentos[aux.Id] = aux.Titulo
    ))


    return (
        <div className="container">
            <div class="lanc">
                <div class="tbl-container">
                <h1 class="tbl-h1">Registros</h1>
                    <table cellpadding="0" cellspacing="0" border="0">
                        <div class="tbl-content">
                            <div class="tbl-header">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Categoria</th>
                                    <th>Pagamento</th>
                                    <th>Título</th>
                                    <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { lancamentos.map( lancamento => (
                                    <tr key={lancamento.Id}>
                                        <td>{lancamento.Id}</td>
                                        <td>{categorias[lancamento.Categoria]}</td>
                                        <td>{pagamentos[lancamento.MetodoDePagamento]}</td>
                                        <td>{lancamento.Titulo}</td>
                                        <td>{lancamento.Valor}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </div>
                        </div>
                    </table>
                </div>
            </div>
            <Sidebar />
        </div>
    );
};

export default Lancamentos;