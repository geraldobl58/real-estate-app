import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should hamdle the open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)
    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })

    // fireEvent.click(screen.getByLabelText(/close menu/i))
    // expect(modal.getAttribute('aria-hidden')).toBe('true')
    // expect(modal).toHaveStyle({ opacity: 0 })
  })
})