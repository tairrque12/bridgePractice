import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RatingComponent from './RatingComponent'

describe('RatingComponent', () => {

    // TEST 1 — Renders all 5 stars
    it('should render 5 stars', () => {
        render(<RatingComponent onRate={() => {}} />)

        expect(screen.getByTestId('star-1')).toBeInTheDocument()
        expect(screen.getByTestId('star-2')).toBeInTheDocument()
        expect(screen.getByTestId('star-3')).toBeInTheDocument()
        expect(screen.getByTestId('star-4')).toBeInTheDocument()
        expect(screen.getByTestId('star-5')).toBeInTheDocument()
    })

    // TEST 2 — Highlights star when clicked
    it('should highlight star when clicked', async () => {
        render(<RatingComponent onRate={() => {}} />)

        await userEvent.click(screen.getByTestId('star-3'))

        expect(screen.getByTestId('star-3')).toHaveClass('selected')
    })

})