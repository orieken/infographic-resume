import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TimelineItem from '@/components/ui/TimelineItem';
import type { Experience } from '@/data/types';

const mockJob: Experience = {
  id: 'test-job',
  title: 'Principal SDET',
  company: 'Test Company',
  date: 'August 2023 - Present',
  highlights: [
    'Built ML-powered testing platform',
    'Mentored development teams',
    'Created automation frameworks'
  ]
};

describe('TimelineItem', () => {
  it('renders job information correctly', () => {
    render(<TimelineItem job={mockJob} index={0} isVisible={true} />);

    expect(screen.getByText('Principal SDET')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('August 2023 - Present')).toBeInTheDocument();
  });

  it('renders all job highlights', () => {
    render(<TimelineItem job={mockJob} index={0} isVisible={true} />);

    mockJob.highlights.forEach(highlight => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });
  });

  it('applies correct styling classes', () => {
    const { container } = render(<TimelineItem job={mockJob} index={0} isVisible={true} />);

    const timelineItem = container.firstChild as HTMLElement;
    expect(timelineItem).toHaveClass('relative', 'mb-8', 'ml-8');

    const card = timelineItem.querySelector('.bg-white.dark\\:bg-gray-800');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'p-6', 'shadow-lg');
  });

  it('renders timeline dot with correct styling', () => {
    const { container } = render(<TimelineItem job={mockJob} index={0} isVisible={true} />);

    const dot = container.querySelector('.bg-blue-500.rounded-full');
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass('absolute', '-left-8', 'top-6', 'w-4', 'h-4', 'border-4');
  });

  it('applies visibility animation based on isVisible prop', () => {
    const { container, rerender } = render(<TimelineItem job={mockJob} index={0} isVisible={false} />);

    let timelineItem = container.firstChild as HTMLElement;
    expect(timelineItem).toHaveClass('opacity-0', 'translate-x-8');

    rerender(<TimelineItem job={mockJob} index={0} isVisible={true} />);
    timelineItem = container.firstChild as HTMLElement;
    expect(timelineItem).toHaveClass('opacity-100', 'translate-x-0');
  });

  it('applies correct transition delay based on index', () => {
    const { container } = render(<TimelineItem job={mockJob} index={1} isVisible={true} />);

    const timelineItem = container.firstChild as HTMLElement;
    expect(timelineItem).toHaveStyle({ transitionDelay: '200ms' });
  });

  it('renders highlights with correct bullet points', () => {
    const { container } = render(<TimelineItem job={mockJob} index={0} isVisible={true} />);

    const bullets = container.querySelectorAll('.text-blue-500');
    expect(bullets).toHaveLength(mockJob.highlights.length);

    bullets.forEach(bullet => {
      expect(bullet).toHaveTextContent('✦');
    });
  });
});