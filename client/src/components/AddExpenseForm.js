

const AddExpenseForm = ({ submit, nameChange, amtChange }) => {
    return (
        <div className="AddExpenseForm">
            <form onSubmit={submit}>
                <div>
                <label htmlFor="name" placeholder="expense name...">Name:</label>
                <input onChange={nameChange} name="name" type="text" id="name" />
                </div>

                <div>
                <label htmlFor="amt" placeholder="expense name...">Amount:</label>
                <input onChange={amtChange} name="amount" type="text" id="amt" />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddExpenseForm;