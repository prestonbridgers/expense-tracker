import './App.css';
import { useState, useEffect } from 'react';
import ExpenseView from './components/ExpenseView';
import axios from 'axios';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState("defaultName");
  const [expenseAmt, setExpenseAmt] = useState("defaultAmt");

  const loadExpenses = () => {
    axios.get('http://localhost:5000/api/expenses')
      .then(res => {
        console.log(res);
        setExpenses(res.data);
      })
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

  useEffect(loadExpenses, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpenseForm submit={submitAddForm}
                      nameChange={event => setExpenseTitle(event.target.value)}
                      amtChange={event => setExpenseAmt(event.target.value)} />
      <ExpenseView expenses={ expenses }/>
    </div>
  );
}

export default App;
