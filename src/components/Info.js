import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card, Icon } from 'antd'
import styled from 'styled-components'



export default class Info extends Component {
  static propTypes = {
    user: PropTypes.shape({
      empty: PropTypes.bool,
      avatar_url: PropTypes.string
    }).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { user } = this.props

    if(user.isFetching) {
      return <Icon type="loading" style={{ fontSize: '36px' }} theme="outlined" />
    }

    if(user.empty) return null

    return (
      <Wrapper>
        <Card title={user.name}>
          <AvatarWrapper>
            <Avatar size={128} src={user.avatar_url} icon="user" />
          </AvatarWrapper>

          <p><b>Email:</b> {user.email || 'nope'}</p>
          <p><b>Location:</b> {user.location || 'nope'}</p>
          <p><b>Followers:</b> {user.followers || 'nope'}</p>
          <p><b>Following:</b> {user.following || 'nope'}</p>
        </Card>
      </Wrapper>
    );
  }

}


const Wrapper = styled.div`
  text-align: left;
  margin: 40px 0;
`

const AvatarWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
`
