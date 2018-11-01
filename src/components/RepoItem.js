import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import styled, { css } from 'styled-components'
import { RepoInfo } from 'components'

export default class RepoItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      html_url: PropTypes.string,
    }).isRequired
  }

  state = {
    opened: false
  }

  toggleRepo = () => {
    this.setState(prevState => ({
      opened: !prevState.opened
    }))
  }

  render() {
    const { item } = this.props
    const { opened } = this.state

    return (
      <Item
        onClick={this.toggleRepo}>
        <ItemContainer>
          <Info>
            <Title>
              <Arrow opened={opened}>
                <Icon type="right" theme="outlined" />
              </Arrow>
              {item.name}
              {item.fork && (
                <Fork>
                  <Icon type="fork" theme="outlined" />
                </Fork>
              )}
            </Title>
            <Description>{item.description}</Description>
          </Info>
          <Actions>
            <a href={item.html_url} rel='noopener noreferrer' target='_blank'>
              <Icon type="export" theme="outlined" />
            </a>
          </Actions>
        </ItemContainer>
        <RepoInfo opened={opened} item={item}/>
      </Item>
    )
  }
}

const Item = styled.div`
  padding: 12px 10px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #e8e8e8;
  }

  &:hover {
    background: #f7f7f7;
  }
`

const Title = styled.h4`
  color: rgba(0,0,0,.65);
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 22px;
  display: flex;
`

const Actions = styled.div`

`

const Description = styled.div`
  color: rgba(0,0,0,.45);
  font-size: 14px;
  line-height: 22px;
`

const Info = styled.div`

`

const Fork = styled.div`
  margin-left: 10px;
  position: relative;

  &::after {
    position: absolute;
    content: 'Fork';
    font-size: 8px;
    line-height: 8px;
  }
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Arrow = styled.div`
  transition: transform 0.2s ease;
  display: block;
  height: 14px;
  margin-right: 4px;

  ${props => props.opened && css`
    transform: rotate(90deg);
  `}
`
