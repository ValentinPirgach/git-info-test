import React from 'react'
import logo from 'assets/logo.svg'
import styled from 'styled-components'

function Header() {
  return (
    <TopBar>
      <img src={logo} alt='logo' />
      <h2>Welcome to Git info app</h2>
    </TopBar>
  )
}

export default Header


const TopBar = styled.div`
  height: 150px;
  padding: 20px;
  color: #000;
  margin-bottom: 40px;

  img {
    height: 80px;
  }
`
