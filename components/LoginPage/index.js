import { ButtonWrap, FormButton, FormHeading, FormSpan, FormSubtitle, FormTitle, Input, InputWrap, LoginContainer, LoginForm, LoginMessage, LoginSection, MessageSubtitle, MessageTitle } from "./LoginStyles";

import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import Link from "next/link";

const LoginPage = () => {
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
      alert('Email ou senha incorretos!')
    }

    console.log(data)
  }

  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <FormHeading>
            <FormTitle>ADUFPI</FormTitle>
            <FormSubtitle>Entre com sua conta</FormSubtitle>
          </FormHeading>
          <InputWrap>
            <Input type={'email'} placeholder="E-mail" required 
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
            />
            <Input type={'password'} placeholder="Senha" required 
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
            />
          </InputWrap>
          <ButtonWrap>
            <FormButton type="submit" >Entrar</FormButton>
            <FormSpan>Ainda não possui uma conta? <Link href={'/signup'} >Cadastre-se</Link></FormSpan>
          </ButtonWrap>
        </LoginForm>
        <LoginMessage>
          <MessageTitle>Bem-Vindo de Volta!</MessageTitle>
          <MessageSubtitle>Falta pouco para conhecer os quartos disponíveis para sua reserva!</MessageSubtitle>
        </LoginMessage>
      </LoginContainer>
    </LoginSection>
  );
}

export default LoginPage;