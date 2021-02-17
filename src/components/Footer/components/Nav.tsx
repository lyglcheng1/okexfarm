import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xaf7600df103a2e1c2a707e233bd2a51ad63c12f6#code"
      >
        MasterChef Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        OkfSwap OKF-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="https://discord.gg/QvC7ArF7rd">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/okexfarm/okexfarm">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/kswap_okf">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@kswap">
        Medium
      </StyledLink>
       <StyledLink target="_blank" href="https://t.me/kswap_okf">
        Telegram
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[100]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
