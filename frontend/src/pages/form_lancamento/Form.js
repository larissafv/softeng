import { useEffect, useState } from 'react';
import './Form.css';
import Sidebar from '../../dashboard/sidebar/Sidebar';

const Form_Lancamento = () => {
    const [categorias, setCategoria] = useState([])
    useEffect(()=> {
        const loadData = () => {
            fetch('http://127.0.0.1:8000/api/categorias')
            .then(response => response.json())
            .then(data => setCategoria(data))
        }
        loadData()
    }, [])
        
    const [pagamentos, setPagamentos] = useState([])
    useEffect(()=> {
        const loadData = () => {
            fetch('http://127.0.0.1:8000/api/pagamentos')
            .then(response => response.json())
            .then(data => setPagamentos(data))
        }
        loadData()
    }, [])

    return (
        <div className="container">
            <div className="formlancamento">
                <div className="flanc__container">
                    <div className="flanc__title">
                        <h1>Novo Lançamento</h1>
                    </div>
                    <form className="flanc__form" action="/">
                        <label>
                            Qual é o tipo de lançamento?
                        </label>
                        <br />
                        <div className="flanc__radio">
                            <label className="rad-label">
                                <input className="rad-input" type="radio" id="flanc_ganho" name="tipo_lancamento" value="Ganho" />
                                <div class="rad-design"></div>
                                <div class="rad-text">Ganho</div>
                            </label>
                            <br />
                            <label className="rad-label">
                            <input className="rad-input" type="radio" id="flanc_despesa" name="tipo_lancamento" value="Despesa" />
                            <div class="rad-design"></div>
                            <div class="rad-text">Despesa</div>
                            </label>
                        </div>
                        <br />
                        <div className="form_group">
                        <input className="form_group_control" type="text" maxLength={50} id="flanc_titulo" name="titulo_lancamento" placeholder="Título" />
                        <br />
                        </div>
                        <div className="form_group">
                        <input className="form_group_control" type="text" id="flanc_descricao" name="descricao_lancamento" placeholder="Descrição" />
                        <br />
                        </div>
                        <div className="form_group">
                        <label for="categoria_lancamento">Categoria: </label>
                        <br />
                        <select name="categoria_lancamento" id="cars">
                        {
                            categorias.map( categoria => (
                                <option value={categoria.Id}>{categoria.Titulo}</option>
                            ))
                        }
                        </select>
                        <br />
                        </div>
                        <div className="form_group">
                        <label for="metodo_lancamento">Método de Pagamento: </label>
                        <br />
                        <select name="metodo_lancamento" id="cars">
                        {
                            pagamentos.map( pagamento => (
                                <option value={pagamento.Id}>{pagamento.Titulo}</option>
                            ))
                        }
                        </select>
                        <br />
                        </div>
                        <div className="form_group">
                        <input className="form_group_control" type="number" id="flanc_valor" name="valor_lancamento" placeholder="Valor"/>
                        <br />
                        </div>
                        <div className="form_group button">
                        <button class="form_button" type="submit">Atualizar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Sidebar />
        </div>
    );
};

export default Form_Lancamento;