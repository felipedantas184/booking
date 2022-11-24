import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div
      style={{width: '40%', margin: 'auto'}}>
      <h1 className="text-center my-3 ">Signup</h1>
      <form onSubmit={handleSignup}>
        <h3>Register User</h3>
        <input 
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
          value={data.email} 
        />
        <input 
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
          value={data.password}
        />
        <button type="submit" >Create User</button>
      </form>
    </div>
  )
}

export default Signup