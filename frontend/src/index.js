import { render } from 'react-dom';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Form_Lancamento from './pages/form_lancamento/Form';
import Lancamentos from './pages/lancamentos/Lancamentos'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="form-lancamento" element={<Form_Lancamento />} />
      <Route path="lancamentos" element={<Lancamentos />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);