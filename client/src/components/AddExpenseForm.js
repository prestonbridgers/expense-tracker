

const AddExpenseForm = ({ submit, nameChange, amtChange }) => {
    return (
        <form className="AddExpenseForm" onSubmit={submit}>
            <h4>Add Expense</h4>
            <label htmlFor="name" placeholder="expense name...">Name:</label>
            <input onChange={nameChange} name="name" type="text" id="name" />

            <label htmlFor="amt" placeholder="expense name...">Amount:</label>
            <input onChange={amtChange} name="amount" type="text" id="amt" />

            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddExpenseForm;