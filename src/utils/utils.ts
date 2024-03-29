import Axios from 'axios';

export function formatMoney(amount: number | string, decimalCount = 2, decimal = '.', thousands = ',') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs((+amount) - (+i))
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
}

export function formatMoneyReducer(amount: any, reduceBy = 1000000000, symbol = 'B') {
  return formatMoney(amount / reduceBy) + ' ' + symbol;
}

export const genericGet = async ({ url }: { url: string }, mock: any) => {
  let data;

  // if (process.env.NODE_ENV !== 'development') {
  //   data = (await Axios.get(url)).data;
  // } else {
    await new Promise(r => setTimeout(r, 2000));
    data = mock;
  // }

  return data;
};