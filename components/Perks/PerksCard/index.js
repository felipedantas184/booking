import Image from 'next/image'
import { ButtonLink, PerksCardDescription, PerksCardImage, PerksCardItem, PerksCardOverlay, PerksCardTitle, TextWrapper } from './PerksCardStyles';
import { FiExternalLink } from "react-icons/fi"

const PerksCard = ({ perk }) => {
  return (
    <PerksCardItem>
      <PerksCardOverlay />
      <PerksCardImage>
        <Image src={perk.imageUrl} alt={perk.productName} layout="fill" />
      </PerksCardImage>
      <TextWrapper>
        <PerksCardTitle>{perk.name}</PerksCardTitle>
        <PerksCardDescription>{perk.description}</PerksCardDescription>
      </TextWrapper>
      <ButtonLink href={`https://www.instagram.com/${perk.instagram.slice(1)}`} target='_blank' >{perk.instagram}<FiExternalLink size={16} color="#E6E6E6" style={{ position: 'absolute', top: 0, right: '5%', bottom: 0, marginTop: 'auto', marginBottom: 'auto' }} /></ButtonLink>
    </PerksCardItem>
  );
}

export default PerksCard;