const Expense = ({ expense }) => {
    return (
        <div className="expense">
            <p>{expense.name}: ${expense.amount}</p>
        </div>
    );
};

export default Expense;