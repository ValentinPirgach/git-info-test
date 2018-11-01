import UserInfoDriver from './drivers/UserInfo.driver'

describe('UserInfo container', () => {
  let driver = null
  const fetchUser = jest.fn()
  const fetchRepos = jest.fn()

  beforeEach(() => {
    driver = new UserInfoDriver({fetchUser, fetchRepos})
  });

  test('should render <Search /> component', () => {
    expect(driver.get.Search().length).toEqual(1);
  });

  test('should render <Search /> component with correct props', () => {
    const component = driver.get.Search()
    expect(component.prop('onSubmit')).toEqual(driver.get.instance().getUserData);
  });

  test('should render <Info /> component', () => {
    expect(driver.get.Info().length).toEqual(1);
  });

  test('should render <Info /> component with correct props', () => {
    const component = driver.get.Info()
    expect(component.prop('user')).toEqual(driver.mockData.props().user);
  });

  test('should render <Repos /> component', () => {
    expect(driver.get.Repos().length).toEqual(1);
  });

  test('should render <Repos /> component with correct props', () => {
    const component = driver.get.Repos()
    expect(component.prop('user')).toEqual(driver.mockData.props().user);
    expect(component.prop('repos')).toEqual(driver.mockData.props().repos);
  });

  test('should call fetch functions, when Search submited', () => {
    driver.when.SearchSubmited()

    expect(fetchUser).toHaveBeenCalledWith(driver.mockData.userName)
    expect(fetchRepos).toHaveBeenCalledWith(driver.mockData.userName)
  });
});
