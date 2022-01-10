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

    const handleSubmit = (event) => {
        event.preventDefault();
        var json_data = {};
        
        json_data["Titulo"] = event.target.elements.titulo_lancamento.value;
        json_data["Descricao"] = event.target.elements.descricao_lancamento.value;
        json_data["MetodoDePagamento"] = parseInt(event.target.elements.flanc_metodo.value);
        json_data["Categoria"] = parseInt(event.target.elements.flanc_categoria.value);

        var sinal = 1;
        if(event.target.elements.tipo_lancamento.value == "Despesa")
            sinal = -1
        json_data["Valor"] = parseFloat(event.target.elements.valor_lancamento.value) * sinal;

        console.log(json_data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json_data)
        };
        fetch('http://127.0.0.1:8000/api/lancamentos', requestOptions)
      }

    return (
        <div className="container">
            <div className="formlancamento">
                <div className="flanc__container">
                    <div className="flanc__title">
                        <h1>Novo Lançamento</h1>
                    </div>
                    <form className="flanc__form" action="/" onSubmit={handleSubmit}>
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
                        <br />
                        <div className="custom_select">
                        <select name="categoria_lancamento" id="flanc_categoria">
                        {
                            categorias.map( categoria => (
                                <option value={categoria.Id}>{categoria.Titulo}</option>
                            ))
                        }
                        </select>
                        </div>
                        <br />
                        </div>
                        <div className="form_group">
                        <label for="metodo_lancamento">Método de Pagamento: </label>
                        <br />
                        <br />
                        <div className="custom_select">
                        <select name="metodo_lancamento" id="flanc_metodo">
                        {
                            pagamentos.map( pagamento => (
                                <option value={pagamento.Id}>{pagamento.Titulo}</option>
                            ))
                        }
                        </select>
                        </div>
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