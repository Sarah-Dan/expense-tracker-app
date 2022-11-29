import { Header, Balance, IncomeExpense, TransactionList, AddTransaction }  from './components';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;
