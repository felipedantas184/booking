import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import LoginPage from "../components/LoginPage"

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
    <LoginPage />
  )
}

export default Login