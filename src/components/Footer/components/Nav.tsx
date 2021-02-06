import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://ropsten.etherscan.io/address/0xb7fd921e15904645bc7f5308f3e6a843080928b3#code"
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
      <StyledLink target="_blank" href="https://twitter.com/okexfarm">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@okexfarm">
        Medium
      </StyledLink>
       <StyledLink target="_blank" href="https://t.me/okexfarm">
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
