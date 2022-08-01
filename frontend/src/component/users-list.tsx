import './users.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  interface User {
    id: number;
    name: string;
    email: number;
    phone: string;
  }

 const [userState, setUserState] = useState<Array<User>>([]);


  useEffect(() => {
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      url: 'http://localhost:3001/api/users'
    })
    .then(({data}) => {
      setUserState(data);
    })
  }, []);

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
    </table>
    {userState.map((user) => (
      <div key={user.id}>
      <table>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
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
      </div>))}
    </div>
  );
}
export default UserList;
