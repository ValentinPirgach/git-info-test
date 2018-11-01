import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, List, Icon } from 'antd'
import { RepoItem } from 'components'

const Repos = (props) => {
  const { user, repos: { list } } = props

  if(props.repos.isFetching) {
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

Repos.propTypes = {
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

export default Repos

const Wrapper = styled.div`
  text-align: left;
  margin: 40px 0;
`
