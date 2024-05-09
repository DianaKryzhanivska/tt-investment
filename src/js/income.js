import { refs } from './refs';

const onInvestInputChange = e => {
  const value = parseFloat(e.target.value);
  refs.investSum.textContent = value.toLocaleString();

  const profitValue = value * 7.5;
  refs.profitInput.value = profitValue;
  refs.profitSum.textContent = profitValue.toLocaleString();

  const bonusValue = profitValue * 0.05;
  refs.bonusSum.textContent = bonusValue.toFixed(2).toLocaleString();

  const totalPaymentValue = profitValue + bonusValue;
  refs.paymentSum.textContent = totalPaymentValue.toLocaleString();
};

const onProfitInputChange = e => {
  const value = parseFloat(e.target.value);
  refs.profitSum.textContent = value.toLocaleString();

  const investValue = value / 7.5;
  refs.investInput.value = investValue;
  refs.investSum.textContent = investValue.toLocaleString();

  const bonusValue = value * 0.05;
  refs.bonusSum.textContent = bonusValue.toFixed(2).toLocaleString();

  const totalPaymentValue = value + bonusValue;
  refs.paymentSum.textContent = totalPaymentValue.toLocaleString();
};

refs.investInput.addEventListener('input', onInvestInputChange);
refs.profitInput.addEventListener('input', onProfitInputChange);
