import { HeroBox, HeroButton, HeroContainer, HeroForm, HeroHeading, HeroSection, HeroSubtitle, HeroTitle } from "./HeroStyles";


const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroHeading>
          <HeroTitle>Search Your Next Home</HeroTitle>
          <HeroSubtitle>Find new & featured property located in your local city.</HeroSubtitle>
        </HeroHeading>

        <HeroForm>
          <HeroBox>
            {/**RangePicker*/}

            <HeroButton>
              {/**Icon*/}
            </HeroButton>
          </HeroBox>
        </HeroForm>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;