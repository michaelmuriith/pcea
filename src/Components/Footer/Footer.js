import React from 'react';
import { Button } from '../../Global';
import Logo from './pcea.png';
import { 
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinksItem,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    Img,
    SocialLogo,
    SocialIconLink,
    WebsiteRights
    
} from './Footer.elements'

const footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of service</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
                < FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>Video</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of service</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
               <SocialMediaWrap>
                   <SocialLogo to='/'> 
                        <Img src={Logo} alt="logo"/>
                        Embakasi Church
                   </SocialLogo>
                   <WebsiteRights>Embakasi &copy; 2020</WebsiteRights>
                   <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                        </SocialIconLink>
                   </SocialIcons>
               </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
 
export default footer
