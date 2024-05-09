import { refs } from './refs';

const onInvestInputChange = e => {
  const value = e.target.value;
  const investSumElem =
    e.target.parentElement.querySelector('.income-sum-box p');
  investSumElem.textContent = value.toString();

  refs.profitInput.value = value * 7.5;
  const profitElem =
    refs.profitInput.parentElement.querySelector('.income-sum-box p');
  profitElem.textContent = refs.profitInput.value;
};

const onProfitInputChange = e => {
  const value = e.target.value;
  const profitElem = e.target.parentElement.querySelector('.income-sum-box p');
  profitElem.textContent = value.toString();

  refs.investInput.value = value / 7.5;
  const investSumElem =
    refs.investInput.parentElement.querySelector('.income-sum-box p');
  investSumElem.textContent = refs.investInput.value;
};

refs.investInput.addEventListener('input', onInvestInputChange);
refs.profitInput.addEventListener('input', onProfitInputChange);
