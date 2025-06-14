import { render, screen } from '@testing-library/react';
import StatCard from '../../src/components/ui/StatCard';


const mockStat = {
  id: 'test',
  number: '10+',
  label: 'Test Stat',
  color: 'from-blue-500 to-cyan-500'
};

describe('StatCard', () => {
  it('renders stat information correctly', () => {
    render(<StatCard stat={ mockStat } index={ 0 } isVisible={ false } />);

    expect(screen.getByText('Test Stat')).toBeInTheDocument();
  });
});
