import CreateUser from "./component/create-user";
import UserList from "./component/users-list";
import EditUser from "./component/edit-user";
import { Routes, Route } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <div className="App">
        <Routes>
          <Route path = "/" element={<UserList/>}/>
          <Route path = "/CreateUser" element={<CreateUser/>}/>
          <Route path = "/EditUser" element={<EditUser/>}/>
        </Routes>
    </div>
  );
}

export default App;
