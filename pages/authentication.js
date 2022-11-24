import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "../firebase/initFirebase"

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  const displayName = 'Felipe Dantas'

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        displayName
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
        displayName
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return ( 
    <div>
      <div>
        <h3>Register User</h3>
        <input 
          placeholder="Email" 
          onChange={(event) => {
            setRegisterEmail(event.target.value)
          }} />
        <input 
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value)
          }} />
        <button onClick={register} >Create User</button>
      </div>

      <div>
        <h3>Login User</h3>
        <input 
          placeholder="Email" 
          onChange={(event) => {
            setLoginEmail(event.target.value)
          }} />
        <input 
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value)
          }} />
        <button onClick={login}>Login</button>
      </div>

      <h4>User Logged In</h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
   );
}
 
export default Login;