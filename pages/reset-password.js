import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ButtonWrap, FormButton, FormHeading, FormSpan, FormSubtitle, Input, InputGroup, InputLabel, InputWrap, LoginContainer, LoginForm, LoginMessage, LoginSection, MessageSubtitle, MessageTitle } from "../components/LoginPage/LoginStyles";
import { useAuth } from "../context/AuthContext";

const Reset = () => {
  const router = useRouter()
  const { forgotPassword } = useAuth()

  const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false)

  const handleResetPassword = async (e) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      await forgotPassword(email)
      alert('E-mail de redefinição de senha enviado! Clique no link presente no email e redefina sua senha!')
      router.push('/')
    } catch (err) {
      setLoading(false)
      console.log(err)
      alert('Não foi possível realizar essa tarefa!')
    }
  }

  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm>
          <FormHeading>
            <Image src={'/images/adufpi_logo.png'} width={200} height={66} alt='ADUFPI' />
            <FormSubtitle>Recuperar Senha</FormSubtitle>
          </FormHeading>
          <InputWrap>
            <InputGroup>
              <InputLabel>E-mail</InputLabel>
              <Input type={'email'} placeholder="Digite seu e-mail" required
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                value={email}
              />
            </InputGroup>
          </InputWrap>
          <ButtonWrap>
            <FormButton onClick={handleResetPassword} >
              {!loading ? (
                'Enviar e-mail'
              ) :
                'Enviando'
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

export default Reset;