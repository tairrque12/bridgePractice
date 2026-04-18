import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddBossForm from './AddBossForm'


describe('AddBossForm', () => {

  // TEST 1 — Fields render correctly
  it('should render all input fields', () => {
    render(<AddBossForm onSubmit={() => {}} />)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Company')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Department')).toBeInTheDocument()
  })

  // TEST 2 — Form submits correct data
  it('should call onSubmit with form data when submitted', async () => {
    const mockSubmit = vi.fn()
    render(<AddBossForm onSubmit={mockSubmit} />)

    await userEvent.type(screen.getByPlaceholderText('Name'), 'Tairrque Baker')
    await userEvent.type(screen.getByPlaceholderText('Company'), 'Google')
    await userEvent.type(screen.getByPlaceholderText('Department'), 'Sales')
    await userEvent.click(screen.getByRole('button', { name: /Add Boss/i }))

    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'Tairrque Baker',
      company: 'Google',
      department: 'Sales'
    })
  })
})