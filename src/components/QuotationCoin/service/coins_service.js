export const getCoinService = async () => {
  return await fetch(
    "https://api.hgbrasil.com/finance?format=json-cors&key=120e72ee"
  )
    .then((data) => data.json())
    .then((data) => console.log("Direto do service", data))
    .then((data) => {
      return {
        USD: data.results.currencies.USD.buy,
        EUR: data.results.currencies.EUR.buy,
        ARS: data.results.currencies.ARS.buy,
      };
    });
};
