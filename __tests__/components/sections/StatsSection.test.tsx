import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StatsSection from '@/components/sections/StatsSection';
import { createMockStat } from '@/test/utils';

// Mock StatCard component
vi.mock('@/components/ui/StatCard', () => ({
  default: ({ stat, index, isVisible }: any) => (
    <div data-testid={`stat-card-${stat.id}`} data-index={index} data-visible={isVisible}>
      {stat.label}: {stat.number}
    </div>
  )
}));

const mockStats = [
  createMockStat({ id: 'stat1', number: '18+', label: 'Years Experience' }),
  createMockStat({ id: 'stat2', number: '90+', label: 'Teams Mentored' }),
  createMockStat({ id: 'stat3', number: '12', label: 'SDETs Led' }),
  createMockStat({ id: 'stat4', number: '7', label: 'Programming Languages' })
];

const mockRegisterElement = vi.fn();
const mockVisibleItems = new Set(['stats-section']);

describe('StatsSection', () => {
  it('renders all stat cards', () => {
    render(
      <StatsSection
        stats={mockStats}
        visibleItems={mockVisibleItems}
        registerElement={mockRegisterElement}
      />
    );

    mockStats.forEach(stat => {
      expect(screen.getByTestId(`stat-card-${stat.id}`)).toBeInTheDocument();
    });
  });

  it('applies correct grid layout classes', () => {
    const { container } = render(
      <StatsSection
        stats={mockStats}
        visibleItems={mockVisibleItems}
        registerElement={mockRegisterElement}
      />
    );

    const gridContainer = container.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-8');
  });

  it('registers element for intersection observation', () => {
    render(
      <StatsSection
        stats={mockStats}
        visibleItems={mockVisibleItems}
        registerElement={mockRegisterElement}
      />
    );

    expect(mockRegisterElement).toHaveBeenCalled();
  });

  it('passes correct props to StatCard components', () => {
    render(
      <StatsSection
        stats={mockStats}
        visibleItems={mockVisibleItems}
        registerElement={mockRegisterElement}
      />
    );

    mockStats.forEach((stat, index) => {
      const statCard = screen.getByTestId(`stat-card-${stat.id}`);
      expect(statCard).toHaveAttribute('data-index', index.toString());
      expect(statCard).toHaveAttribute('data-visible', 'true');
    });
  });
});

