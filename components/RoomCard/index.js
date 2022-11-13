import Link from 'next/link'
import Image from 'next/image'
import { AddToCartButton, RoomImage, RoomItem, RoomName, RoomOverlay, RoomPrice } from "./RoomCardStyles";

const RoomCard = ({room}) => {
  const { title, slug, price, thumbnail } = room.fields

  return (
    <RoomItem>
      <RoomOverlay />
      <RoomImage>
        <Image src={'https:' + thumbnail.fields.file.url} alt={title} width={470} height={556} />
      </RoomImage>
      <RoomName>{title}</RoomName>
      <RoomPrice>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(price)}</RoomPrice>
      <AddToCartButton>
        <Link href={'/' + slug}>Adicionar</Link>
      </AddToCartButton>
    </RoomItem>
  );
}

export default RoomCard;