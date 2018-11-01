import RepoItemDriver from './drivers/RepoItem.driver'

describe('RepoItem container', () => {
  let driver = null
  const onSubmit = jest.fn()

  beforeEach(() => {
    driver = new RepoItemDriver({ onSubmit })
  })

  test('should render <Item /> component', () => {
    expect(driver.get.Item().length).toEqual(1)
  })

  test('should toggle state param, when clicked on item', () => {
    driver.when.ItemClicked()
    expect(driver.get.state().opened).toBeTruthy()

    driver.when.ItemClicked()
    expect(driver.get.state().opened).toBeFalsy()
  })

  test('should render <RepoInfo />', () => {
    const component = driver.get.RepoInfo()
    expect(component.length).toEqual(1)
  });

  test('should render <RepoInfo /> with opened prop', () => {
    let component = driver.get.RepoInfo()

    expect(component.prop('opened')).toBeFalsy()

    driver.when.ItemClicked()
    component = driver.get.RepoInfo()

    expect(component.prop('opened')).toBeTruthy()
  });

  test('should render <RepoInfo /> with item prop', () => {
    const component = driver.get.RepoInfo()

    expect(component.prop('item')).toEqual(driver.mockData.props().item)
  });
});
