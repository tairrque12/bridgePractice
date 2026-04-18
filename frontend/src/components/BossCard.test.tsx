import {render, screen} from "@testing-library/react";
import BossCard from './BossCard'

describe('BossCard', () => {
    it('should display boss name', () => {
    render(<BossCard name = 'Tairrque' company = 'Google' department = 'Sales'/>)
        expect(screen.getByText('Tairrque')).toBeInTheDocument();
    });
    it('should display company name', () => {
        render(<BossCard name = 'Tairrque' company = 'Google' department = 'Sales'/>)
        expect(screen.getByText('Google')).toBeInTheDocument();
    });
    it('should display department name', () => {
        render(<BossCard name = 'Tairrque' company = 'Google' department = 'Sales'/>)
        expect(screen.getByText('Sales')).toBeInTheDocument();
    });
});