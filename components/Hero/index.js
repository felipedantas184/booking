import Image from 'next/image'
import { FiShoppingBag, FiUsers, FiAward, FiBarChart2 } from 'react-icons/fi' 
import { HeroContainer, HeroHeading, HeroSubtitle, HeroTextWrapper, HeroWrapper, LogoWrapper, MenuBlock, MenuBlockName, MenuWrapper } from "./HeroStyles";
import Link from "next/link";

const Hero = () => {
	return ( 
		<HeroContainer>
			<HeroWrapper>
				<HeroTextWrapper>
					<LogoWrapper>
						<Image src='/LogoCarcara.png' alt='A.A.A. Carcará' width={657} height={657} />
					</LogoWrapper>
					<HeroHeading>A.A.A.<br/>CARCARÁ</HeroHeading>
					<HeroSubtitle>Associação Atlética Acadêmica<br/>da Medicina UFPI</HeroSubtitle>
				</HeroTextWrapper>
				
				<MenuWrapper>
					<Link href='/working' passHref>
						<MenuBlock style={{backgroundColor: '#002C57'}} >
							<FiShoppingBag size={50} color="#F6F6F6"/>
							<MenuBlockName>Produtos</MenuBlockName>
						</MenuBlock>
					</Link>
					
					<Link href='/carteira-digital' passHref>
						<MenuBlock style={{backgroundColor: '#00376F'}} >
							<FiUsers size={50} color="#F6F6F6"/>
							<MenuBlockName>Carteirinha</MenuBlockName>
						</MenuBlock>
					</Link>
					
					<Link href='/vantagens' passHref>
						<MenuBlock style={{backgroundColor: '#004C89'}} >
							<FiAward size={50} color="#F6F6F6"/>
							<MenuBlockName>Vantagens</MenuBlockName>
						</MenuBlock>
					</Link>
					
					<Link href='/working' passHref>
						<MenuBlock style={{backgroundColor: '#005793'}} >
							<FiBarChart2 size={50} color="#F6F6F6"/>
							<MenuBlockName>Treinos</MenuBlockName>
						</MenuBlock>
					</Link>
				</MenuWrapper>
			</HeroWrapper>
		</HeroContainer>
		);
}
 
export default Hero;