import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Search, Info, Repos } from 'components'
import * as userActions from 'actions/user'
import * as reposActions from 'actions/repos'
import { Row, Col } from 'antd'


class UserInfo extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    fetchRepos: PropTypes.func.isRequired,
    user: PropTypes.shape({}).isRequired,
    repos: PropTypes.shape({
      list: PropTypes.array,
      isFetching: PropTypes.bool
    }).isRequired,
  }

  state = {}

  getUserData = ({userName}) => {
    this.props.fetchUser(userName)
    this.props.fetchRepos(userName)
  }

  render() {
    const { user, repos } = this.props

    return (
      <div>
        <Search onSubmit={this.getUserData} />
        <Row gutter={16}>
          <Col span={6}>
            <Info user={user} />
          </Col>
          <Col span={18}>
            <Repos user={user} repos={repos} />
          </Col>
        </Row>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  user: state.user,
  repos: state.repos
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser: userActions.fetchUser,
  fetchRepos: reposActions.fetchRepos,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
