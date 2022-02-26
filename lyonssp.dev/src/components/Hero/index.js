import { Header, HeroRow, HeroContainer, HeroWrapper, Image, TextWrapper, Subtitle, Heading, Column1, Column2, ImageWrap } from './HeroElements'
import programmer from '../../img/programmer.svg'

const Hero = () => {
  return (
    <HeroContainer id="about">
        <HeroWrapper>
            <HeroRow>
                <Column1>
                    <TextWrapper>
                        <Heading>Sean Lyons</Heading>
                        <Subtitle>Software Developer</Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImageWrap>
                        <Image src={programmer} />
                    </ImageWrap>
                </Column2>
            </HeroRow>
        </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero;
