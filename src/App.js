import React, { useState } from 'react';
import './App.css';
import LoginForm from './component/LoginForm'
import Dashboard from './component/dashboard';

function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"1234admin"
  }
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = user => {
    if (user.name && user.email && user.password) {
      setUser({...user, name: user.name, email: user.email})
      setIsLoggedIn(true);
    }
  }

  const Logout = () => {
    console.log("Logout");
  }
  return (
    <div className="App">
      <div>
        {(isLoggedIn) ? (
          <Dashboard user={user} />
         ) : (
           <LoginForm login={Login} error={error} logout={Logout} />
         )}
      </div>
    </div>
  );
}

export default App;
