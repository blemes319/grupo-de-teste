export const getCoin = async () => {
  return fetch("https://api.hgbrasil.com/finance?format=json-cors&key=120e72ee")
    .then((data) => data.json())
    .then((data) => JSON.parse(data))
    .then((data) => {
      return {
        USD: data.results.currencies.USD.buy,
        EUR: data.results.currencies.EUR.buy,
        ARS: data.results.currencies.ARS.buy,
      };
    });
};
