import { useEffect, useState } from 'react';
import hello from '../../assets/hello.jpg'
import Chart from '../charts/Chart';
import './Main.css';

const Main = () => {
    
    const [info, setDashboard] = useState([])
    useEffect(()=> {
        const loadData = () => {
            fetch('http://127.0.0.1:8000/api/dash')
            .then(response => response.json())
            .then(data => setDashboard(data))
        }
        loadData()
    }, [])


    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello there</h1>
                        <p>Bem vindx à dash</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Investimentos</p>
                            <span className="font-bold text-title">R$ {parseFloat(info["Investimentos"]).toFixed(2)}</span>
                        </div>
                        <i className="fa fa-file-invoice-dollar fa-2x text-pink"></i>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Receitas</p>
                            <span className="font-bold text-title">R$ {parseFloat(info["Receitas"]).toFixed(2)}</span>
                        </div>
                        <i className="fa fa-hand-holding-usd fa-2x text-pink"></i>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Despesas</p>
                            <span className="font-bold text-title">R$ {-1*parseFloat(info["Despesas"]).toFixed(2)}</span>
                        </div>
                        <i className="fa fa-receipt fa-2x text-pink"></i>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Saldo</p>
                            <span className="font-bold text-title">R$ {parseFloat(info["Saldo"]).toFixed(2)}</span>
                        </div>
                        <i className="fa fa-wallet fa-2x text-pink"></i>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__title">
                        <div>
                            <h1>Visão Geral</h1>
                            <p>Movimentação do dinheiro</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    <Chart />
                </div>
            </div>
        </main>
    );
};

export default Main;