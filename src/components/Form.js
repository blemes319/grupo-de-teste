import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value, coin } = e.target.elements;

    onSubmit({
      value: value.value,
      coin: coin.value,
    });
  };

  const onChangeValue = (e) => {
    setValue(e);

    if (isNaN(e) === true) {
      setError("Não é um número o que foi digitado!");
      setDisable(true);
    }
    if (isNaN(e) === false) {
      setError("");
      setDisable(false);
    }
    if (e === "") {
      setError("Campo está vazio");
      setDisable(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="value">Valor: </label>
      <input
        type="text"
        id="value"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        placeholder="Digite o valor"
      />
      <label htmlFor="coin">Da moeda: </label>
      <select name="basecoin">
        <option value="USD" data-testid="">
          Dolar Americano
        </option>
        <option value="EUR">Euro</option>
        <option value="GBP">Libra Esterlina</option>
      </select>
      <label htmlFor="coin">Para a moeda:</label>
      <select name="resultcoin">
        <option value="USD">Dolar Americano</option>
        <option value="EUR" data-testid="">
          Euro
        </option>
        <option value="GBP">Libra Esterlina</option>
      </select>
      <button type="submit" disabled={disable} role="calcular">
        Calcular
      </button>
      Valor Convertido:
      <label role="out">{isNaN(value) ? "Valor inválido" : value}</label>
      {/* <button type="submit">CalcularDois</button> */}
      <p>{error}</p>
    </form>
  );
};

export default Form;
