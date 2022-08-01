import './users.css'
import { useNavigate} from 'react-router-dom';
// import axios from "axios"

const UserList = () => {

  const navigate = useNavigate()

  const navigateCreateUsers = () => {
    // 👇️ navigate to /createUsers
    let path = 'createUser'
    navigate(path);
  };

  return (
    <div className='main-container'>
      <div className='title'>
        <h2>Users</h2>
        <button onClick={navigateCreateUsers} className='btn btn-primary'>Create User</button>

        {/* <Routes>
          <Route path="/createUser" />
        </Routes> */}
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
