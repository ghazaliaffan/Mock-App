import './users.css'
const UserList = () => {

  return (
    <div className='main-container'>
      <div className='title'>
        <h2>Users</h2>
        <button className='btn btn-primary'>Create User</button>
      </div>

      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Maria@gmail.com</td>
          <td>+123456789</td>
          <td>
            <button className="btn btn-secondary">
              Send
            </button>
          </td>
          <td>
            <button className="btn btn-primary">
              Edit
            </button>
            <button  className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Maria@gmail.com</td>
          <td>+123456789</td>
          <td>
            <button className="btn btn-secondary">
              Send
            </button>
          </td>
          <td>
            <button className="btn btn-primary">
              Edit
            </button>
            <button  className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Maria@gmail.com</td>
          <td>+123456789</td>
          <td>
            <button className="btn btn-secondary">
              Send
            </button>
          </td>
          <td>
            <button className="btn btn-primary">
              Edit
            </button>
            <button  className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default UserList;