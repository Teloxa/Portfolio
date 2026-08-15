import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders hero heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
