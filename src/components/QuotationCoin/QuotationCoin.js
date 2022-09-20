import { getCoinService } from "./service/coins_service";

const QuotationCoin = () => {
  const { USD, EUR, ARS } = getCoinService();

  return (
    <div>
      <p>{USD ?? `Cotação do USD não encontrado`}</p>
      <p>{EUR ?? `Cotação do EUR não encontrado`}</p>
      <p>{ARS ?? `Cotação do ARS não encontrado`}</p>
    </div>
  );
};

export default QuotationCoin;
