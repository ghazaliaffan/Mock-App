import CreateUser from "./component/create-user";
import UserList from "./component/users-list";
import { Routes, Route } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <div className="App">
        <Routes>
          <Route path = "/">
            <UserList/>
          </Route>
          <Route path = "\create-user">
            <CreateUser/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
