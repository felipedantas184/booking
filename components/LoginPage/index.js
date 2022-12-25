import { ButtonWrap, FormButton, FormHeading, FormSpan, FormSubtitle, FormTitle, Input, InputGroup, InputLabel, InputWrap, LoginContainer, LoginForm, LoginMessage, LoginSection, MessageSubtitle, MessageTitle } from "./LoginStyles";

import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    
    console.log(user)
    try {
      setLoading(true)
      await login(data.email, data.password)
      router.push('/')
    } catch (err) {
      setLoading(false)
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
            <Image src={'/images/adufpi_logo.png'} width={200} height={66} alt='ADUFPI'  />
            <FormSubtitle>Login</FormSubtitle>
          </FormHeading>
          <InputWrap>
            <InputGroup>
              <InputLabel>E-mail</InputLabel>
              <Input type={'email'} placeholder="Digite seu e-mail" required 
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
              />
            </InputGroup>
            
            <InputGroup>
              <InputLabel>Senha</InputLabel>
              <Input type={'password'} placeholder="Digite sua senha" required 
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              />
            </InputGroup>
          </InputWrap>
          <ButtonWrap>
            <FormButton type="submit">
              {!loading ? (
                'Entrar'
              ) :
                'Entrando...'
              }
              </FormButton>
            <FormSpan>Não possui uma conta? <Link href={'/signup'}>Cadastre-se</Link></FormSpan>
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