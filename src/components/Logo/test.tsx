import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black with color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
