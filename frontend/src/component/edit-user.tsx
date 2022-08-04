
import { useLocation} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

//onChange={changeHandler} 
const EditUser = () => {

    const {state}: any = useLocation();
    const [userInfo, setUserInfo] = useState<any>({email: '', password: '', name: '', age: 0, admin: false});

    // useEffect(function effectFunction() {
    //     if (state) {
    //         setUserInfo(state);
    //     }
    // }, [state]);

    const changeHandler = ({target}: any): void => {
        setUserInfo((prev: any) => ({...prev, [target.id]:target.value}));
    }

    const updateUser = (id: any, i: any) => {
        axios({
          method: 'PUT',
          url: `http://localhost:3001/api/users/${id}`,
          data: {state}
        })
        .then(({data}) => {
          setUserInfo((prev: any) => {
            const newList = [prev];
            newList[i] = data;
            return newList;
          })
        })
      }

    return(
        <><div>
            <h1>Edit</h1>
        </div><div>
                <form>
                    <label>Email:
                        <input onChange={changeHandler} type="text" id="email" defaultValue={state.email} />
                    </label>
                    <label>Password:
                        <input onChange={changeHandler} type="text" id="password" defaultValue={state.password} />
                    </label>
                    <label>Name:
                        <input onChange={changeHandler} type="text" id="name" defaultValue={state.name} />
                    </label>
                    <label>Phone:
                        <input onChange={changeHandler} type="number" id="phone" defaultValue={state.phone} />
                    </label>
                    <label>Admin?:
                        <input onChange={changeHandler} type="checkbox" id="admin" defaultValue={state.admin} />
                    </label>
                    <button onClick={() => updateUser(state.id, state.id)}>Edit</button>
                </form>
            </div></>
    );

};

export default EditUser;