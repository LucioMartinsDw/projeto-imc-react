import React, { useState } from 'react';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  const calcularImc = () => {
    if (altura && peso) {
      const imcValue = peso / (altura * altura);
      setImc(imcValue.toFixed(2));

      let classificacaoValue;
      if (imcValue < 18.5) {
        classificacaoValue = 'Abaixo do peso';
      } else if (imcValue < 25) {
        classificacaoValue = 'Peso normal';
      } else if (imcValue < 30) {
        classificacaoValue = 'Sobrepeso';
      } else {
        classificacaoValue = 'Obesidade';
      }

      setClassificacao(classificacaoValue);
    }
  };

  const resetarCalculadora = () => {
    setAltura('');
    setPeso('');
    setImc(0);
    setClassificacao('');
  };

  return (
    <div className="App">
      <style jsx>{`
        .App {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f5f5f5;
          font-family: Arial, sans-serif;
        }

        form {
          display: flex;
          flex-direction: column;
          margin: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #fff;
        }

        label {
          margin-bottom: 5px;
          font-weight: bold;
        }

        input[type="number"] {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        button {
          margin: 10px 0;
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .resultado {
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
      <h1>Calculadora de IMC</h1>
      <form>
        <label htmlFor="altura">Altura (em metros):</label>
        <input
          type="number"
          id="altura"
          value={altura}
          onChange={handleAlturaChange}
        />

        <label htmlFor="peso">Peso (em kg):</label>
        <input
          type="number"
          id="peso"
          value={peso}
          onChange={handlePesoChange}
        />

        <button type="button" onClick={calcularImc}>Calcular IMC</button>
      </form>

      {imc && (
        <div className="resultado">
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
          <button type="button" onClick={resetarCalculadora}>Resetar</button>
        </div>
      )}
    </div>
  );
};

export default App;
