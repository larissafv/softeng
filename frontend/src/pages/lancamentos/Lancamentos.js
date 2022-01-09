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
    
    var lancamentos1 = lancamentos
    var busca_
    const [busca, setBusca] = useState('');
    function buscanegativos(val){
        if(val.Valor<0)
        return val
    }
    function buscapositivos(val){
        if(val.Valor>0)
        return val
    }
    function buscaData(val){
        var ini = Date.parse(busca_.split(" - ")[0])
        var fin = Date.parse(busca_.split(" - ")[1])        
        if(Date.parse(val.DataHoraEnvio)>=ini && Date.parse(val.DataHoraEnvio)<=fin)
        return val
    }
    function buscacategoria(val){
        if(categorias[val.Categoria]==busca_)
        return val
    }
    function buscapagamento(val){
        if(pagamentos[val.MetodoDePagamento]==busca_)
        return val
    }
    for(let i=0; i<busca.split(',').length;i++){
        busca_ = busca.split(',')[i]
        if(busca_=="despesas"){
            lancamentos1 = lancamentos1.filter(buscanegativos)
        }
        else if(busca_ == "ganhos"){
            lancamentos1 = lancamentos1.filter(buscapositivos)
        }
        else if(Object.values(categorias).includes(busca_)){
            lancamentos1 = lancamentos1.filter(buscacategoria)
        }
        else if(Object.values(pagamentos).includes(busca_)){
            lancamentos1 = lancamentos1.filter(buscapagamento)
        }
        else if(busca_.length == 23){
            if(busca_.split(" - ").length ==2 && busca_.split(" - ")[1].split("-").length ==3 && busca_.split(" - ")[1].split("-")[2].length ==2 && Date.parse(busca_.split(" - ")[1]) > Date.parse(busca_.split(" - ")[0])){
                lancamentos1 = lancamentos1.filter(buscaData)
            }
        }
    }
    
    return (
        <div className="container">
            <div class="lanc">
                <div class="tbl-container">
                <h1 class="tbl-h1">Registros</h1>
                    <div class="filter-div">
                        <input type="text" placeholder="Procurar" value = {busca} onChange={(env) => setBusca(env.target.value)}/>
                    </div>
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
                                    <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { lancamentos1.map( lancamento => (
                                    <tr key={lancamento.Id}>
                                        <td>{lancamento.Id}</td>
                                        <td>{categorias[lancamento.Categoria]}</td>
                                        <td>{pagamentos[lancamento.MetodoDePagamento]}</td>
                                        <td>{lancamento.Titulo}</td>
                                        <td>{lancamento.Valor}</td>
                                        <td>{lancamento.DataHoraEnvio.split("T")[0]}</td>
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