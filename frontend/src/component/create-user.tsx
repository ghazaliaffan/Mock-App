//import { useParams } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  //const { name } = useParams();
  //const [userState, setUserState] = useState([]);
  const [userInfo, setUserInfo] = useState<any>({email: '', password: '', name: '', age: 0, admin: false});

  const changeHandler = ({target}: any): void => {
    setUserInfo((prev: any) => ({...prev, [target.id]:target.value}));
  }
  axios.defaults.withCredentials = process.env.NODE_ENV !== 'development';
  const addUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios({
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000', 
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400'
      },
      method: 'POST',
      url: 'http://localhost:3001/api/users',
      data: userInfo,
    })
    .then(({data}) => {
      setUserInfo((prev: any) => {
        const newList = [prev];
        newList.push(data);
        return newList;
      });
    })
  };

  return (
    <div>
      <form>
      <label>Email:
    <input onChange={changeHandler} type="text" id="email" value={userInfo.email}/>
  </label>
  <label>Password:
    <input onChange={changeHandler} type="text" id="password" value={userInfo.password}/>
  </label>
      <label>Name:
    <input onChange={changeHandler} type="text" id="name" value={userInfo.name}/>
  </label>
  <label>Phone:
    <input onChange={changeHandler} type="number" id="phone" value={userInfo.phone}/>
  </label>
  <label>Admin?:
    <input onChange={changeHandler} type="checkbox" id="admin" value={userInfo.admin}/>
  </label>
  <button onClick={addUser}>Add User</button>
</form>
    </div>
  );
}

export default CreateUser;
