import { ButtonWrap, FormButton, FormHeading, FormSpan, FormSubtitle, FormTitle, Input, InputGroup, InputLabel, InputSplit, InputSplitGroup, InputWrap, LoginContainer, LoginForm, LoginMessage, LoginSection, MessageSubtitle, MessageTitle } from "./SignupStyles";

import { useRouter } from "next/router"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import Link from "next/link";
import fireDB, { auth } from "../../firebase/initFirebase";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { updateProfile } from "firebase/auth";

const SignupPage = () => {
  const router = useRouter()
  const { user, signup } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    cpf: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      await signup(data.email, data.password).then(auth => {
        return setDoc(doc(fireDB, "users", auth.user.uid), {
          name: data.name,
          surname: data.surname,
          phone: data.phone,
          cpf: data.cpf,
          email: data.email
        })
      })
      updateProfile(auth.currentUser, {
        displayName: data.name + ' ' + data.surname,
      })
      router.push('/')
    } catch (err) {
      setLoading(false)
      alert(err)
    }
  }

  return (
    <LoginSection>
      <LoginContainer>
        <LoginForm onSubmit={handleSignup}>
          <FormHeading>
            <Image src={'/images/adufpi_logo.png'} width={200} height={66} alt='ADUFPI'  />
            <FormSubtitle>Cadastro</FormSubtitle>
          </FormHeading>
          <InputWrap>
            <InputSplit>
              <InputSplitGroup>
                <InputLabel>Nome</InputLabel>
                <Input type={'text'} placeholder="Seu nome" required style={{textTransform: 'capitalize'}}
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
                value={data.name}
              />
              </InputSplitGroup>
              <InputSplitGroup>
                <InputLabel>Sobrenome</InputLabel>
                <Input type={'text'} placeholder="Seu sobrenome" required style={{textTransform: 'capitalize'}}
                onChange={(e) =>
                  setData({
                    ...data,
                    surname: e.target.value,
                  })
                }
                value={data.surname}
              />
              </InputSplitGroup>
            </InputSplit>
            <InputSplit>
              <InputSplitGroup>
                <InputLabel>Telefone</InputLabel>
                <Input type={'number'} placeholder="Ex: 86995185757" required
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: e.target.value,
                  })
                }
                value={data.phone}
              />
              </InputSplitGroup>
              <InputSplitGroup>
                <InputLabel>CPF</InputLabel>
                <Input type={'number'} placeholder="Ex: 05620204383" required
                onChange={(e) =>
                  setData({
                    ...data,
                    cpf: e.target.value,
                  })
                }
                value={data.cpf}
              />
              </InputSplitGroup>
            </InputSplit>
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
            <FormButton type="submit" >
              {!loading ? (
                'Entrar'
              ) :
                'Entrando...'
              }
              </FormButton>
            <FormSpan>Já possui uma conta? <Link href={'/login'}>Entre</Link></FormSpan>
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