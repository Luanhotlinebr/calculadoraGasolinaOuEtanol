import { useState, type FormEvent } from "react";

import "./App.css";
import LogoImg from "../assets/logo.png";

import { calculate } from "../services/calculate";

import type InfoProps from "../interfaces/InfoProps";

// - 4 Linhas de código

export default function App() {
  const [gasolinaInput, setGasolinaInput] = useState(1);
  const [alcoolInput, setAlcoolInput] = useState(1);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();
    const resultado = calculate(alcoolInput, gasolinaInput);
    setInfo(resultado);
  }

  return (
    <div>
      <main className="container">
        <img
          className="logo"
          src={LogoImg}
          alt="Logo da calculadora de alcool x gasolina"
        />
        <h1 className="title">Qual a melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label>Álcool(preço por litro):</label>
          <input
            type="number"
            placeholder="4,90"
            className="input"
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina(preço por litro):</label>
          <input
            type="number"
            placeholder="4,90"
            className="input"
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />
          <input type="submit" value="Calcular" className="button" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Álcool: {info.alcool}</span>
            <span>Gasolina: {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  );
}
