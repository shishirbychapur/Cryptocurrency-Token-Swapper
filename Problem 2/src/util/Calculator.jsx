import { Rates } from "../assets/Rates";

export const computeExchangeRate = (fromToken, toToken, fromAmount) => {
  if (fromToken === "Select Token" || toToken === "Select Token" || isNaN(fromAmount) || fromAmount <= 0) {
    return 0;
  }

  const fromPrice = getPrice(fromToken, fromAmount);
  const toPrice = getPrice(toToken, undefined);

  if (toPrice === 0) {
    return 0;
  }

  const result = fromPrice / toPrice;
  return result.toFixed(2);
}

export const getPrice = (token, amount) => {
  try {
    if (token === "Select Token" || amount <= 0 || isNaN(amount)) {
      return 0;
    }
    const required = Rates.filter(rate => rate.currency == token)[0];
    if (amount === undefined) {
      return required.price.toFixed(2);
    } else {
      const price = required.price * amount;
      return price.toFixed(2);
    }
  } catch (err) {
    return 0;
  }
}

export const getUSD = (token) => {
  try {
    if (token === "Select Token") {
      return 0;
    }
    const required = Rates.filter(rate => rate.currency == token)[0];
    return required.price.toFixed(2);
  } catch (err) {
    return 0;
  }
}