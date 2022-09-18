const getCoin = async () => {
  const url = "https://api.hgbrasil.com/finance?key=7ea9c19d";
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};

const QuotationCoin = () => {
  const data = getCoin();
  return <div>{data}</div>;
};

export default QuotationCoin;
