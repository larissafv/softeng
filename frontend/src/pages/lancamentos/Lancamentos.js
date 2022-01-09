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
            <div class="lanc">
                <div class="tbl-container">
                <h1 class="tbl-h1">Registros</h1>
                    <table cellpadding="0" cellspacing="0" border="0">
                    <div class="tbl-content">
                        <div class="tbl-header">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Valor</th>
                                <th>Pagamento</th>
                                <th>Categoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>id</td>
                                <td>titulo</td>
                                <td>valor</td>
                                <td>pagamento</td>
                                <td>categoria</td>
                                </tr>
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