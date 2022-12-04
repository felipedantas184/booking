import { ButtonWrap, FormButton, FormHeading, FormSpan, FormSubtitle, FormTitle, Input, InputWrap, LoginContainer, LoginForm, LoginMessage, LoginSection, MessageSubtitle, MessageTitle } from "./SignupStyles";

import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import Link from "next/link";
import fireDB, { auth } from "../../firebase/initFirebase";
import { doc, setDoc } from "firebase/firestore";

const SignupPage = () => {
  const router = useRouter()
  const { user, signup } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password).then(auth => {
        return setDoc(doc(fireDB, "users", auth.user.uid), {
          name: data.name
        })
      })
      router.push('/')
    } catch (err) {
      console.log(err)
      alert(err)
    }

    console.log(data)
  }

  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm onSubmit={handleSignup}>
          <FormHeading>
            <FormTitle>ADUFPI</FormTitle>
            <FormSubtitle>Cadastre-se para prosseguir</FormSubtitle>
          </FormHeading>
          <InputWrap>
            <Input type={'text'} placeholder="Nome" required
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
              value={data.name}
            />
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
            <FormButton type="submit" >Criar Conta</FormButton>
            <FormSpan>Já possui uma conta? <Link href={'/login'} >Entre</Link></FormSpan>
          </ButtonWrap>
        </LoginForm>
        <LoginMessage>
          <MessageTitle>Seja Bem-Vindo!</MessageTitle>
          <MessageSubtitle>Falta pouco para conhecer os quartos disponíveis para sua reserva!</MessageSubtitle>
        </LoginMessage>
      </LoginContainer>
    </LoginSection>
  );
}

export default SignupPage;