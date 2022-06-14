import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Expenses from './Expenses'
import reportWebVitals from './reportWebVitals';
import Budgets from './Budgets';
import Goals from './Goals';
import Calendar from './Calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="expenses" element={<Expenses />} />
      <Route path="budgets" element={<Budgets />} />
      <Route path="goals" element={<Goals />} />
      <Route path="calendar" element={<Calendar />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
