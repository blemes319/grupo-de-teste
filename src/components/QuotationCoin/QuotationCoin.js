import { useState } from "react";
import { getCoinService } from "./service/coins_service";

const QuotationCoin = () => {
  const coin = getCoinService();

  console.log("coin: ", coin.USD);
};

export default QuotationCoin;
