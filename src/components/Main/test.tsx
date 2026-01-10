import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /next-starter/i })
    ).toBeInTheDocument()
  })

  it('should render with custom title and description', () => {
    render(<Main title="Custom Title" description="Custom Description" />)

    expect(
      screen.getByRole('heading', { name: /custom title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /custom description/i })
    ).toBeInTheDocument()
  })
})
