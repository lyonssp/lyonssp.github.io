import { CareerContainer, CardDates, CardCompanyName, CardDescription, CardImage, CareerRow, Column1, Column2, Header } from './CareerElements'
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
        copy: `
        At AWS, I am working on modern monitoring and observability solutions with the Amazon Managed Prometheus
        team.  We operate Prometheus so you do not have to and enable our customers manage the time-series
        data that help them to successfully operate critical software services.
        `
      },
      {
        dates: '09/2018 - 07/2021',
        companyName: 'Symbiont',
        role: 'Senior Software Engineer',
        logo: symbiont,
        copy: `
        Symbiont is a financial technology firm providing DeFi solutions to major financial institutions with the Assebmly 
        smart contracts platform.  My technical focus was on distributed systems testing, deploying external tools like Jepsen and later
        refactoring the database to enable message-driven simulation testing, similar to approaches described by FoundationDB
        and the paper A Million Tiny Databases.
        `
      },
      {
        dates: '03/2018 - 09/2018',
        companyName: 'iHeartRadio',
        role: 'Site Reliability Engineer',
        logo: iheart,
        copy: `
        In my short tenure here with the streaming giant iHeartRadio, I did deep-diving research into how Kubernetes could be
        leveraged in our streaming service deployments and how Prometheus could be integrated with our infrastructure monitoring
        stack.  Funny enough, my first day with the audio streaming giant, iHeartRadio, was the day they filed
        chapter 11 bankruptcy.  Althrough counter-intuitive, bankruptcy has its financial benefits for employees.  However,
        the common reaction amongst employees was to jump ship and move on to other streaming competitors like
        Disney and Spotify.  
        `
      },
      {
        dates: '03/2016 - 03/2018',
        companyName: 'CommonBond',
        role: 'Senior Software Engineer',
        logo: commonbond,
        copy: `
        CommonBond is a small student loan refinancing startup.  My primary contributions came as an inaugural member of the CommonBond For Business
        team, for which I was the single-threaded owner of the service landscape that powered the product.  Some features of our ecosystem included 
        Cognito authentication, activity-based authorization with Apache Shiro, and a small set of business services that powered multiple customer-facing
        applications.
        `
      },
      {
        dates: '01/2015 - 03/2016',
        companyName: 'FactSet',
        role: 'Software Engineer',
        logo: factset,
        copy: `
        I landed at FactSet a starry-eyed new grad, eager to learn anything and everything.  I worked on the Market Intelligence and BookBuilder
        applications, both hosted within the FactSet Workstation.  My responsibilities included developing modern web applications built on top of a LAMP
        stack, and maintaining a news delivery service responsible for aggregating and shipping dynamic news reports used by our customers to
        make critical financial decisions.
        `
      }
  ]

  return (
    <CareerContainer id="career">
        {mocks.map(experience => {
            return <CareerRow>
                <Column1>
                    <CardImage src={experience.logo} alt="logo" />
                    <CardDates>{experience.dates}</CardDates>
                </Column1>
                <Column2>
                    <CardDescription>{experience.copy}</CardDescription>
                </Column2>
            </CareerRow>
        })}        
    </CareerContainer>
  )
}

export default Career;
