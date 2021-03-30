import './App.css';
import { useState, useEffect } from 'react';
import ExpenseView from './components/ExpenseView';
import axios from 'axios';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState("defaultName");
  const [expenseAmt, setExpenseAmt] = useState("defaultAmt");
  const [total, setTotal] = useState(0);

  const loadExpenses = () => {
    axios.get('http://localhost:5000/api/expenses')
      .then(res => {
        console.log(res);
        setExpenses(res.data);
      })
  }

  const calculateTotal = () => {
    const newTotal = expenses.reduce((sum, c) => {
      return sum + c.amount;
    }, 0);
    setTotal(newTotal);
  }

  const submitAddForm = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/expenses', {
      name: expenseTitle,
      amount: parseFloat(expenseAmt)
    })
    .then(response => {
      console.log(response);
      loadExpenses();
    })
    .catch(error => {
     console.log(error);
    });

    event.target.name.value = "";
    event.target.amount.value = "";
  }

  const clickExpense = event => {
    axios
      .delete(`http://localhost:5000/api/expenses/${event.target.id}`)
      .then(response => {
        console.log(response);
        loadExpenses();
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(loadExpenses, []);
  useEffect(calculateTotal, [expenses]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Total: ${total.toFixed(2)}</h2>
      <AddExpenseForm submit={submitAddForm}
                      nameChange={event => setExpenseTitle(event.target.value)}
                      amtChange={event => setExpenseAmt(event.target.value)} />
      <ExpenseView expenses={ expenses }
                   onClick={ clickExpense } />
    </div>
  );
}

export default App;
