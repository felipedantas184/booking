import Image from 'next/image'
import { DoubleGroup, InfoGroup, InfoGroupDescription, InfoGroupTitle, InfoImageWrapper, InfoLogoWrapper, InfoMemberCardWrapper, InfoTextWrapper, MemberCardBottomText, MemberCardContainer, MemberCardWrapper, MemberHeading, MemberTextWrapper, MemberTopRow } from './MemberCardStyles';

const MemberCard = ({ member }) => {
  return ( 
    <MemberCardContainer>
			<MemberCardWrapper>
				<MemberTextWrapper>
					<MemberHeading>Carteira<br />Digital</MemberHeading>
				</MemberTextWrapper>

				<InfoMemberCardWrapper>
					<MemberTopRow>
						<InfoImageWrapper>
							<Image src={member.imageUrl} alt={member.name} layout="fill" placeholder="blur" blurDataURL={member.imageUrl} objectFit="cover" />
						</InfoImageWrapper>

						<InfoLogoWrapper>
							<Image src="/LogoCarcara.png" alt="Carcará Logo" layout="fill"/>
						</InfoLogoWrapper>
					</MemberTopRow>

					<InfoTextWrapper>
						<InfoGroup>
							<InfoGroupTitle>Nome</InfoGroupTitle>
							<InfoGroupDescription style={{textTransform: 'capitalize'}} >{member.name}</InfoGroupDescription>
						</InfoGroup>

						<DoubleGroup>
							<InfoGroup>
								<InfoGroupTitle>Matrícula</InfoGroupTitle>
								<InfoGroupDescription>{member.registration}</InfoGroupDescription>
							</InfoGroup>

							<InfoGroup>
								<InfoGroupTitle>R.G.</InfoGroupTitle>
								<InfoGroupDescription>{member.document}</InfoGroupDescription>
							</InfoGroup>
						</DoubleGroup>

						<DoubleGroup>
							<InfoGroup>
								<InfoGroupTitle>Validade</InfoGroupTitle>
								<InfoGroupDescription>Jan/2023</InfoGroupDescription>
							</InfoGroup>
							
							<InfoGroup>
								<InfoGroupTitle>Turma</InfoGroupTitle>
								<InfoGroupDescription>{member.class}</InfoGroupDescription>
							</InfoGroup>
						</DoubleGroup>
					</InfoTextWrapper>	

					<MemberCardBottomText>Associação Atlética <br/>Acadêmica Carcará</MemberCardBottomText>
				</InfoMemberCardWrapper>				
			</MemberCardWrapper>
		</MemberCardContainer>
   );
}
 
export default MemberCard;