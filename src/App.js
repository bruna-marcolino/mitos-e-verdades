import React from 'react';
import logo from './logo.jpg';
import './App.scss';

function Question() {
  return (
    <h3 className="title">Tomar agua depois de comer doce da diabetes!</h3>
  )
}

function App() {
  return (
    <main className="wrapper">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
      <h2 class="questions-number">
        Questão 1 de 10
      </h2>
      {Question()}
      <section className="action-buttons">
        <button className="btn btn--secondary">Mito</button>
        <button className="btn btn--primary">Verdade</button>
      </section>
    </main>
  );
}

export default App;
