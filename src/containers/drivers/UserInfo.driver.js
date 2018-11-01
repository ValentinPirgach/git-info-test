import React from 'react'
import { mount } from 'enzyme'
import { UserInfo } from 'containers/UserInfo'
import { Search, Info, Repos } from 'components'

export default class UserInfoDriver {
  constructor(props = {}) {
    this.wrapper = mount(
      <UserInfo {...this.mockData.props()} {...props} />
    )
  }

  mockData = {
    userName: 'OctoCat',
    props: () => ({
      user: {},
      repos: {}
    })
  }

  get = {
    Search: () => this.wrapper.find(Search),
    Info: () => this.wrapper.find(Info),
    Repos: () => this.wrapper.find(Repos),
    instance: () => this.wrapper.instance()
  }

  when = {
    SearchSubmited: () =>
      this.get.Search().prop('onSubmit')({ userName: this.mockData.userName })
  }
}
