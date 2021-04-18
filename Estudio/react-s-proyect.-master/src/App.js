import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const contadorInicial = Number(localStorage.getItem('contador'))
  const [counter, setCounter] = React.useState(contadorInicial);

  const sumarContador = () => {
    setCounter(counter + 1);
  }

  React.useEffect(() => {
    if (counter !== 0) {
      localStorage.setItem('contador', counter);
    }
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Challenge <code> react </code>
        </p>
        <button
          onClick={sumarContador}
        >
          No hagas click aca
        </button>
        <p>
          {counter}
        </p>
      </header>
    </div>
  );
};
