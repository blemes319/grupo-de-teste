export const getCoinService = async () => {
  const data = await fetch(
    "https://api.hgbrasil.com/finance?format=json-cors&key=a3a49e87"
  );
  const newdata = await data.json();
  let result = newdata["results"]["currencies"];
  // console.log("direto no service", JSON.stringify(newdata.results.currencies));
  console.log("results", result);
  return result;
};
