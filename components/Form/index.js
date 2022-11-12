import { BecomeMemberButton, FormContainer, FormWrapper, Heading, Input, InputWrapper, Label, Subtitle, TextWrapper } from "./FormStyles";
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';

const Form = () => {
  const [registration, setRegistration] = useState('')

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/carteira-digital/${registration}`)
  }

  return (
    <FormContainer>
      <FormWrapper>
        <TextWrapper>
          <Heading>Carteira<br />Digital</Heading>
          <Subtitle>Digite sua matrícula para acessar sua carteira digital.</Subtitle>
        </TextWrapper>

        <InputWrapper>
          <form style={{ display: 'flex', width: '100%' }} onSubmit={handleSubmit}>
            <Input type='number' placeholder="Digite sua matrícula" value={registration} onChange={(e) => { setRegistration(e.target.value) }} />
            <Label>MATRÍCULA</Label>
          </form>
          <Link href={'/carteira-digital/' + registration} passHref >
            <a>
              <AiOutlineArrowRight size={32} color="#C4C4C4" style={{ alignSelf: 'center' }} />
            </a>
          </Link>
        </InputWrapper>

        <Link href='/vantagens' passHref>
          <BecomeMemberButton>Vantagens</BecomeMemberButton>
        </Link>
      </FormWrapper>
    </FormContainer>
  );
}

export default Form;