import Expense from './Expense';

const ExpenseView = ({ expenses }) => {
    return (
        <div>
            {expenses.map(e => (
                    <Expense key={e._id} expense={e}/>
            ))}
        </div>
    );
}

export default ExpenseView;