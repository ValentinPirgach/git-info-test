import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import styled from 'styled-components'

/* eslint camelcase: 0 */
export default function RepoInfo(props) {
  const { opened, item: { forks_count, stargazers_count, open_issues_count, watchers_count }} = props

  if(!opened) return null

  return (
    <Wrapper>
      <Item>
        <Icon type="fork" theme="outlined" />: {forks_count}
      </Item>
      <Item>
        <Icon type="star" theme="outlined" />: {stargazers_count}
      </Item>
      <Item>
        <Icon type="eye" theme="outlined" />: {watchers_count}
      </Item>
      <Item>
        <Icon type="exclamation-circle" theme="outlined" />: {open_issues_count}
      </Item>
    </Wrapper>
  );
}

RepoInfo.propTypes = {
  opened: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    forks_count: PropTypes.number.isRequired,
    watchers_count: PropTypes.number.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    open_issues_count: PropTypes.number.isRequired
  }).isRequired
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 0 0 0px;
  border-top: 1px dashed #e8e8e8;
  margin-top: 13px;
`

const Item = styled.div`
  margin-right: 15px;

  img {
    width: 16px;
  }
`;
