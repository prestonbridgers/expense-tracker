

const UserForm = ({ change, submitUser }) => {
    return (
        <div className="UserForm" onSubmit={ submitUser } >
            <form>
                <label htmlFor="user">User:</label>
                <input name="user" id="user" type="text" onChange={change}/>
                <div>
                    <button type="submit">Change User</button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;