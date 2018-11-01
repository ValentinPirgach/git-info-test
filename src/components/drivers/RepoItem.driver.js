import React from 'react'
import { mount } from 'enzyme'
import RepoItem, { Item } from 'components/RepoItem'
import { RepoInfo } from 'components'

export default class SearchDriver {
  constructor(props = {}) {
    this.wrapper = mount(
      <RepoItem {...this.mockData.props()} {...props} />
    )
  }

  mockData = {
    props: () => ({
      item: {
        name: 'Test name',
        description: 'Test Description',
        fork: true,
        html_url: 'http://some.url.com',
        forks_count: 1,
        watchers_count: 2,
        stargazers_count: 3,
        open_issues_count: 4
      }
    })
  }

  get = {
    Item: () => this.wrapper.find(Item),
    RepoInfo: () => this.wrapper.find(RepoInfo),
    state: (key) => this.wrapper.state(key),
    instance: () => this.wrapper.instance()
  }

  when = {
    ItemClicked: () => this.get.Item().simulate('click')
  }
}
