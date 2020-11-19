import React from "react"
import { Container, Flex } from "../styles/GlobalStyle"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyle"
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>922.125.289</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>12 lam at Unit N</p>
            <p>Bell Street, Mo 129</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Facebook />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
