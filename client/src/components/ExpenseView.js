import Expense from './Expense';

const ExpenseView = ({ expenses, onClick }) => {
    return (
        <div className="ExpenseView">
            <h4>Expenses:</h4>
            {expenses.map(e => (
                    <Expense key={e._id} onClick={onClick} expense={e}/>
            ))}
        </div>
    );
}

export default ExpenseView;