

const UserForm = ({ change, submitUser }) => {
    return (
        <form className="UserForm" onSubmit={ submitUser }>
            <h4>Change User</h4>
            <label htmlFor="user">User:</label>
            <input name="user" id="user" type="text" onChange={change}/>
            <button type="submit">Change User</button>
        </form>
    );
};

export default UserForm;