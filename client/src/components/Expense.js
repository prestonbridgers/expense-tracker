const Expense = ({ expense, onClick }) => {
    return (
        <div className="Expense">
            <p onClick={onClick}
               id={expense._id}>{expense.name}: ${expense.amount}</p>
        </div>
    );
};

export default Expense;