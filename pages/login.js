import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    
    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    <div
      style={{width: '40%', margin: 'auto'}}>
      <h1 className="text-center my-3 ">Login</h1>
      <form onSubmit={handleLogin}>
        <h3>Credentials</h3>
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

export default Login