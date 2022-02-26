import { FaDiscord, FaGithub, FaGithubAlt, FaLinkedinIn, FaReddit, FaRedditAlien, FaSignal, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FooterContact, FooterContactAddress, FooterContactEmail, FooterContactName, FooterContainer, FooterSocial } from './FooterElements'

const Footer = () => {
  const iconSize = 32;
  return (
    <>
        <FooterContainer id="footer">
            <FooterSocial>
                <FaLinkedinIn size={iconSize} />
                <FaGithubAlt size={iconSize} />
                <FaTwitter size={iconSize} />
                <FaRedditAlien size={iconSize} />
                <FaDiscord size={iconSize} />
            </FooterSocial>
            <FooterContact>
                <FooterContactName>Sean Lyons</FooterContactName>
                <FooterContactAddress>Austin, TX 78721</FooterContactAddress>
                <FooterContactEmail>lyonssp777@gmail.com</FooterContactEmail>
            </FooterContact>
        </FooterContainer>
    </>
  )
}

export default Footer
