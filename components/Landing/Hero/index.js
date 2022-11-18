import { HeroBox, HeroButton, HeroContainer, HeroForm, HeroHeading, HeroSection, HeroSubtitle, HeroTitle } from "./HeroStyles";

import { DatePicker, Space } from 'antd'
const { RangePicker } = DatePicker;
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/pt_BR';


const Hero = ({ filterByDate }) => {

  const disabledDate = (current) => {
    return current && current < moment().endOf("day")
  };


  return (
    <>
    <HeroSection>
      <HeroContainer>
        <HeroHeading>
          <HeroTitle>ADUFPI</HeroTitle>
          <HeroSubtitle>Selecione as datas que deseja para sua hospedagem.</HeroSubtitle>
        </HeroHeading>

        <HeroForm>
          <HeroBox>
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} locale={locale} allowClear={false} disabledDate={disabledDate} />

            <HeroButton>
              {/**Icon*/}
            </HeroButton>
          </HeroBox>
        </HeroForm>
      </HeroContainer>
    </HeroSection>
    </>
  );
}

export default Hero;