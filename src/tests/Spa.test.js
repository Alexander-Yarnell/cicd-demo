import Spa from '../Spa'

describe("Spa text is rendered to page", () => {
  test("H1 element Spa is rendered to page", () => {
    expect(Spa()).toEqual(<h1>Hello World</h1>);
  })
})

