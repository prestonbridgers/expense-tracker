import './App.css';
import { useState, useEffect } from 'react';
import ExpenseView from './components/ExpenseView';
import axios from 'axios';
import AddExpenseForm from './components/AddExpenseForm';
import UserForm from './components/UserForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState("defaultName");
  const [expenseAmt, setExpenseAmt] = useState("defaultAmt");
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState("default");

  const loadExpenses = () => {
    axios.get(`/api/expenses/${user}`)
      .then(res => {
        console.log(res.data);
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

    axios.post('/api/expenses', {
      user: user,
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

  const submitUser = event => {
    event.preventDefault();
    setUser(event.target.user.value);
  }

  const clickExpense = event => {
    axios
      .delete(`/api/expenses/${event.target.id}`)
      .then(response => {
        console.log(response);
        loadExpenses();
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(loadExpenses, [user]);
  useEffect(calculateTotal, [expenses]);

  return (
    <div className="App">
      <h1 className="Header">Expense Tracker</h1>
      <h2 className="CurrentUser">Current User: {user}</h2>
      <UserForm submitUser={ submitUser }/>
      <h2 className="Total">Total: ${total.toFixed(2)}</h2>
      <AddExpenseForm submit={submitAddForm}
                      nameChange={event => setExpenseTitle(event.target.value)}
                      amtChange={event => setExpenseAmt(event.target.value)} />
      <ExpenseView expenses={ expenses }
                   onClick={ clickExpense } />
    </div>
  );
}

export default App;
