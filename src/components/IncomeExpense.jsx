import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  // const moneyFormatter = num => {
  //     let p = num.toFixed(2).split('.');
  //     return (
  //         '$' +
  //         p[0]
  //             .split('')
  //             .reverse()
  //             .reduce(function(acc, num, i, orig) {
  //                 return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
  //             }, '') +
  //         '.' +
  //         p[1]
  //     );
  // }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          {/* {moneyFormatter(income)} */}${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          {/* {moneyFormatter(expense)} */}
          ${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
