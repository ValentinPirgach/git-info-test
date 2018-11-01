import React from 'react'
import { UserInfo } from 'containers'
import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" component={UserInfo} />
      </Container>
    </Router>
  )
}

export default Routes


const Container = styled.div`
  text-align: center;
  max-width: 1024px;
  margin: auto;
`
