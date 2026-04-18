import { render, screen } from '@testing-library/react'
import BossList from "./BossList.tsx";


describe('BossList', () => {

  // TEST 1 — List has items
  it('should display a list of bosses', () => {
    const bosses = [
      { id: 1, name: 'Tairrque Baker', company: 'Google', department: 'Sales' },
      { id: 2, name: 'Maxwell George', company: 'Amazon', department: 'Education'}
    ];

    render(<BossList bosses={bosses} />)

    expect(screen.getByText('Tairrque Baker')).toBeInTheDocument()
    expect(screen.getByText('Maxwell George')).toBeInTheDocument()
  })

  // TEST 2 — List is empty
  it('should display a message when no items exist', () => {
    render(<BossList bosses={[]} />)

    expect(screen.getByText('No bosses found.')).toBeInTheDocument()
  })

})