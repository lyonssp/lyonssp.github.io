import { CareerContainer, CardWrapper, CardDates, CardCompanyName, CardDescription, CardImage, Header } from './CareerElements'
import symbiont from '../../img/symbiont.svg'
import aws from '../../img/aws.svg'
import commonbond from '../../img/commonbond.svg'
import factset from '../../img/factset.svg'
import iheart from '../../img/iheart.svg'

const Career = () => {
  const mocks = [
      {
        dates: '07/2021 - Present',
        companyName: 'Amazon Web Services',
        role: 'Senior Software Engineer',
        logo: aws,
      },
      {
        dates: '09/2018 - 07/2021',
        companyName: 'Symbiont',
        role: 'Senior Software Engineer',
        logo: symbiont,
      },
      {
        dates: '03/2018 - 09/2018',
        companyName: 'iHeartRadio',
        role: 'Site Reliability Engineer',
        logo: iheart,
      },
      {
        dates: '03/2016 - 03/2018',
        companyName: 'CommonBond',
        role: 'Senior Software Engineer',
        logo: commonbond,
      },
      {
        dates: '01/2015 - 03/2016',
        companyName: 'FactSet',
        role: 'Software Engineer',
        logo: factset,
      }
  ]

  return (
    <CareerContainer id="career">
        <Header>Career</Header>
        {mocks.map(experience => {
            return <CardWrapper>
                <CardImage src={experience.logo} alt="logo" />
                <CardDates>{experience.dates}</CardDates>
                <CardCompanyName>{experience.companyName}</CardCompanyName>
                <CardDescription>{experience.role}</CardDescription>
            </CardWrapper>
        })}        
    </CareerContainer>
  )
}

export default Career;
