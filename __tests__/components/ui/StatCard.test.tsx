import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StatCard from '@/components/ui/StatCard';
import type { Stat } from '@/data/types';

// Mock the useCountUp hook
vi.mock('@/hooks/useCountUp', () => ({
  useCountUp: vi.fn((end, _duration, shouldStart) => shouldStart ? end : '0')
}));

const mockStat: Stat = {
  id: 'test-stat',
  number: '18+',
  label: 'Years Experience',
  color: 'from-blue-500 to-cyan-500'
};

describe('StatCard', () => {
  it('renders stat information correctly', () => {
    render(<StatCard stat={mockStat} index={0} isVisible={true} />);

    expect(screen.getByText('18+')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<StatCard stat={mockStat} index={0} isVisible={true} />);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-white', 'dark:bg-gray-800', 'rounded-2xl', 'p-8', 'shadow-lg');
  });

  it('shows gradient bar with correct color', () => {
    const { container } = render(<StatCard stat={mockStat} index={0} isVisible={true} />);

    const gradientBar = container.querySelector('.from-blue-500.to-cyan-500');
    expect(gradientBar).toBeInTheDocument();
    expect(gradientBar).toHaveClass('w-full', 'h-1', 'bg-gradient-to-r', 'rounded-full', 'mb-6');
  });

  it('applies visibility classes based on isVisible prop', () => {
    const { container, rerender } = render(<StatCard stat={mockStat} index={0} isVisible={false} />);

    let card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('opacity-0', 'translate-y-8');

    rerender(<StatCard stat={mockStat} index={0} isVisible={true} />);
    card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('opacity-100', 'translate-y-0');
  });

  it('applies correct transition delay based on index', () => {
    const { container } = render(<StatCard stat={mockStat} index={2} isVisible={true} />);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveStyle({ transitionDelay: '200ms' });
  });

  it('handles dark mode classes', () => {
    const { container } = render(<StatCard stat={mockStat} index={0} isVisible={true} />);

    const numberElement = screen.getByText('18+');
    expect(numberElement).toHaveClass('text-gray-800', 'dark:text-white');

    const labelElement = screen.getByText('Years Experience');
    expect(labelElement).toHaveClass('text-gray-600', 'dark:text-gray-300');
  });
});
