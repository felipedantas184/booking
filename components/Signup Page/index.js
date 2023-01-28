import { ButtonWrap, FormButton, FormHeading, FormSpan, FormSubtitle, FormTitle, FormWrapper, Input, InputGroup, InputLabel, InputSplit, InputSplitGroup, InputWrap, LoginContainer, LoginForm, LoginMessage, LoginSection, MessageSubtitle, MessageTitle } from "./SignupStyles";

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
    cpf: '',
    adress: '',
    number: '',
    district: '',
    cep: '',
    relation: '',
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
          email: data.email,
          adress: data.adress,
          number: data.number,
          district: data.district,
          cep: data.cep,
          relation: data.relation,
          admin: false,
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
            <Image src={'/images/adufpi_logo.png'} width={200} height={66} alt='ADUFPI' />
            <FormSubtitle>Cadastro</FormSubtitle>
          </FormHeading>
          <FormWrapper>
            <InputWrap>
              <InputGroup>
                <InputLabel>Nome</InputLabel>
                <Input type={'text'} placeholder="João Batista" required
                  onChange={(e) =>
                    setData({
                      ...data,
                      name: e.target.value,
                    })
                  }
                  value={data.name}
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>Sobrenome</InputLabel>
                <Input type={'text'} placeholder="da Silva Barros" required
                  onChange={(e) =>
                    setData({
                      ...data,
                      surname: e.target.value,
                    })
                  }
                  value={data.surname}
                />
              </InputGroup>
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
            <InputWrap>
              <InputGroup>
                <InputLabel>Telefone</InputLabel>
                <Input type={'number'} placeholder="86995185757" required
                  onChange={(e) =>
                    setData({
                      ...data,
                      phone: e.target.value,
                    })
                  }
                  value={data.phone}
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>CPF</InputLabel>
                <Input type={'number'} placeholder="05620204383" required
                  onChange={(e) =>
                    setData({
                      ...data,
                      cpf: e.target.value,
                    })
                  }
                  value={data.cpf}
                />
              </InputGroup>
              <InputGroup>
                <InputLabel>Endereço</InputLabel>
                <Input type={'text'} placeholder="Av. Joca Pires, 1231" required
                  onChange={(e) =>
                    setData({
                      ...data,
                      adress: e.target.value,
                    })
                  }
                  value={data.adress}
                />
              </InputGroup>
              <InputSplit>
                <InputSplitGroup>
                  <InputLabel>Bairro</InputLabel>
                  <Input type={'text'} placeholder="Fátima" required
                    onChange={(e) =>
                      setData({
                        ...data,
                        district: e.target.value,
                      })
                    }
                    value={data.district}
                  />
                </InputSplitGroup>
                <InputSplitGroup>
                  <InputLabel>CEP</InputLabel>
                  <Input type={'number'} placeholder="64001220" required
                    onChange={(e) =>
                      setData({
                        ...data,
                        cep: e.target.value,
                      })
                    }
                    value={data.cep}
                  />
                </InputSplitGroup>
              </InputSplit>
            </InputWrap>
          </FormWrapper>
          <ButtonWrap>
            <InputSplit style={{ justifyContent: 'space-between', width: '100%', marginLeft: 16, marginBottom: 16, marginTop: 16}}>
              <InputSplitGroup>
                <div>
                  <input type="radio" id="member" name="relation" value="member" required  
                  onClick={(e) =>
                    setData({
                      ...data,
                      relation: e.target.value,
                    })
                  }/>
                  <InputLabel htmlFor="member">Associado</InputLabel>
                </div>
              </InputSplitGroup>
              <InputSplitGroup>
                <div>
                  <input type="radio" id="guest" name="relation" value="guest" 
                  onClick={(e) =>
                    setData({
                      ...data,
                      relation: e.target.value,
                    })
                  }/>
                  <InputLabel htmlFor="guest">Convidado</InputLabel>
                </div>
              </InputSplitGroup>
            </InputSplit>
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
      </LoginContainer>
    </LoginSection>
  );
}

export default SignupPage;