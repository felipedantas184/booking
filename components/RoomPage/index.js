import Link from 'next/link'
import Image from 'next/image'
import { Button, Container, GridWrapper, HalfWrapper, Heading, Subtitle, SubtitlePrice, TextWrapper, Topline } from './RoomPageStyles';

const RoomPage = ({ room }) => {
  console.log(room)
  const { title, slug, price, featuredImage, description, resume } = room.fields

  return (
    <Container>
      <GridWrapper>
        <HalfWrapper>
          <Image src={'https:' + featuredImage.fields.file.url} alt={title} width={470} height={556} />
        </HalfWrapper>
        <HalfWrapper>
          <TextWrapper>
            <Topline>Novidade</Topline>
            <Heading>{title}</Heading>
            <SubtitlePrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(price)}</SubtitlePrice>
            <Subtitle>{resume}</Subtitle>
          </TextWrapper>
          <Button>        
            <Link href={'/checkout/' + slug}>Reservar Agora</Link>
          </Button>
        </HalfWrapper>
      </GridWrapper>
    </Container>
  );
}

export default RoomPage;

