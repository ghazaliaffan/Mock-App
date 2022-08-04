import './users.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserList = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    admin?: boolean;
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

  const navigate = useNavigate()

  const routeChangeEditUser = (userState: any) => {
    let path = `/EditUser`
    navigate(path, { state: userState});
  }

  const routeChangeCreateUser = () =>{ 
    let path = `/CreateUser`; 
    navigate(path)
  }

  const removeUser = (id: any, i: any) => {
    axios({
      method: 'DELETE',
      url: `http://localhost:3001/api/users/${id}`
    })
    .then(() => {
      setUserState((prev) => {
        const newList = [...prev]
        newList.splice(i, 1);
        return newList;
      });
    })
  }

  return (
    <div className='main-container'>
      <div className='title'>
        <h2>Users</h2>
        <button onClick={routeChangeCreateUser} className='btn btn-primary'>Create User</button>
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
        <tr key={user.id}>
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
            <button onClick={()=>routeChangeEditUser(user)} className="btn btn-primary">
              Edit
            </button>
            <button onClick={()=>removeUser(user.id, user.id)} className="btn btn-danger">
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
