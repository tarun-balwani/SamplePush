import logo from "./logo.svg";
import reducer, { initialState } from "./reducer";
import { fetchLogin } from "./services";
import { useReducer } from "react";

import "./App.css";
import { ACTIONS, LOGIN_STATUS, USER_TYPE } from "./constants";
import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onLogin(username){
    fetchLogin(username)
    .then(response => {
      console.log(response);
      dispatch({type: ACTIONS.LOG_IN, response})
    })
    .catch(err => {
      console.log(err);
    })

  }

  return <div className="App">
    {state.loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <LoginForm onLogin = {onLogin}></LoginForm>}
    {state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && state.userType === USER_TYPE.ADMIN && <AdminPanel/>}
    {state.loginStatus === LOGIN_STATUS.IS_LOGGED_IN && state.userType === USER_TYPE.USER && <UserPanel/>}
    </div>;
}

export default App;
