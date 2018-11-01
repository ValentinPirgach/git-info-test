import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, List, Icon } from 'antd'
import { RepoItem } from 'components'

export default class Repos extends Component {
  static propTypes = {
    user: PropTypes.shape({
      empty: PropTypes.bool,
    }).isRequired,
    repos: PropTypes.shape({
      isFetching: PropTypes.bool,
      list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
      }))
    }).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { user, repos: { list } } = this.props

    console.log(this.props.repos);
    if(this.props.repos.isFetching) {
      return <Icon type="loading" style={{ fontSize: '36px' }} theme="outlined" />
    }

    if(user.empty) return null

    return (
      <Wrapper>
        <Card title='Repositories'>
          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => <RepoItem item={item}/>}
          />
        </Card>
      </Wrapper>
    );
  }
}



const Wrapper = styled.div`
  text-align: left;
  margin: 40px 0;
`
