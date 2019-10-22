import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import media from '../styles/media'
import Logo from '../assets/colorfa11y-logo.svg'

const StyledHeader = styled.header`
  height: 50px;
  background: var(--header-background);
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 980px;
  padding: 0 8px 0 12px;
`

const SiteTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 1rem;
  margin: auto 0;
`

const LogoAlt = styled.span`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  position: absolute;
`

const NavLinks = styled.div`
  a {
    color: var(--header-text);
    text-decoration: none;
    font-size: 20px;
    padding: 4px 16px;
    border-radius: 1rem;

    ${media.phone} {
      font-size: 24px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  a.active {
    background: var(--active-nav-link);
  }
  a + a {
    margin-left: 8px;
    ${media.phone} {
      margin-left: 24px;
    }
    ${media.tablet} {
      margin-left: 48px;
    }
  }
`

const Header = ({ siteTitle }: Props) => (
  <StyledHeader>
    <Container>
      <SiteTitle>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          title={`${siteTitle} home`}
        >
          <Logo height="40px" width="123px" aria-hidden="true" alt />
          <LogoAlt>{siteTitle} home</LogoAlt>
        </Link>
      </SiteTitle>
      <NavLinks>
        <Link
          to="/about/"
          title="Learn more about Colorfa11y"
          activeClassName="active"
        >
          About
        </Link>
        <Link
          to="/contribute/"
          title="Learn how to contribute to Colorfa11y"
          activeClassName="active"
        >
          Contribute
        </Link>
      </NavLinks>
    </Container>
  </StyledHeader>
)

type Props = {
  siteTitle: string
}

export default Header