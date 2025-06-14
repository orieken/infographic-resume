import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillBar from '@/components/ui/SkillBar';
import type { Skill } from '@/data/types';

const mockSkill: Skill = {
  name: 'JavaScript',
  level: 95,
  years: '10+ years',
  category: 'expert'
};

describe('SkillBar', () => {
  it('renders skill information correctly', () => {
    render(<SkillBar skill={mockSkill} index={0} isVisible={true} />);

    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('10+ years')).toBeInTheDocument();
  });

  it('applies correct category styling', () => {
    const { rerender } = render(<SkillBar skill={mockSkill} index={0} isVisible={true} />);

    let categoryBadge = screen.getByText('10+ years');
    expect(categoryBadge).toHaveClass('bg-red-100', 'text-red-800', 'dark:bg-red-900', 'dark:text-red-200');

    const proficientSkill: Skill = { ...mockSkill, category: 'proficient' };
    rerender(<SkillBar skill={proficientSkill} index={0} isVisible={true} />);

    categoryBadge = screen.getByText('10+ years');
    expect(categoryBadge).toHaveClass('bg-orange-100', 'text-orange-800', 'dark:bg-orange-900', 'dark:text-orange-200');

    const intermediateSkill: Skill = { ...mockSkill, category: 'intermediate' };
    rerender(<SkillBar skill={intermediateSkill} index={0} isVisible={true} />);

    categoryBadge = screen.getByText('10+ years');
    expect(categoryBadge).toHaveClass('bg-blue-100', 'text-blue-800', 'dark:bg-blue-900', 'dark:text-blue-200');
  });

  it('shows progress bar with correct width when visible', () => {
    const { container } = render(<SkillBar skill={mockSkill} index={0} isVisible={true} />);

    const progressBar = container.querySelector('.bg-gradient-to-r.from-blue-500.to-green-500');
    expect(progressBar).toHaveStyle({ width: '95%' });
  });

  it('shows zero width when not visible', () => {
    const { container } = render(<SkillBar skill={mockSkill} index={0} isVisible={false} />);

    const progressBar = container.querySelector('.bg-gradient-to-r.from-blue-500.to-green-500');
    expect(progressBar).toHaveStyle({ width: '0%' });
  });

  it('applies correct transition delay', () => {
    const { container } = render(<SkillBar skill={mockSkill} index={3} isVisible={true} />);

    const skillBar = container.firstChild as HTMLElement;
    expect(skillBar).toHaveStyle({ transitionDelay: '300ms' });

    const progressBar = container.querySelector('.bg-gradient-to-r.from-blue-500.to-green-500');
    expect(progressBar).toHaveStyle({ transitionDelay: '450ms' });
  });

  it('applies visibility classes correctly', () => {
    const { container, rerender } = render(<SkillBar skill={mockSkill} index={0} isVisible={false} />);

    let skillBar = container.firstChild as HTMLElement;
    expect(skillBar).toHaveClass('opacity-0', 'translate-x-4');

    rerender(<SkillBar skill={mockSkill} index={0} isVisible={true} />);
    skillBar = container.firstChild as HTMLElement;
    expect(skillBar).toHaveClass('opacity-100', 'translate-x-0');
  });
});

