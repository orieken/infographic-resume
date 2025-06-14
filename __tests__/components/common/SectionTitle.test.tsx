import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionTitle from '@/components/common/SectionTitle';

describe('SectionTitle', () => {
  it('renders children correctly', () => {
    render(<SectionTitle>Test Title</SectionTitle>);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Title');
  });

  it('applies default classes', () => {
    render(<SectionTitle>Test Title</SectionTitle>);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-3xl', 'font-bold', 'text-gray-800', 'dark:text-white', 'mb-8', 'relative');
  });

  it('applies additional className when provided', () => {
    const customClass = 'custom-class';
    render(<SectionTitle className={customClass}>Test Title</SectionTitle>);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(customClass);
  });

  it('renders the gradient underline', () => {
    const { container } = render(<SectionTitle>Test Title</SectionTitle>);

    const underline = container.querySelector('.bg-gradient-to-r.from-blue-500.to-green-500');
    expect(underline).toBeInTheDocument();
    expect(underline).toHaveClass('absolute', 'bottom-0', 'left-0', 'w-16', 'h-1', 'rounded-full');
  });

  it('handles empty className prop', () => {
    render(<SectionTitle className="">Test Title</SectionTitle>);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Title');
  });

  it('renders with complex children', () => {
    render(
      <SectionTitle>
        <span>Complex</span> <strong>Title</strong>
      </SectionTitle>
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Complex Title');
    expect(heading.querySelector('span')).toBeInTheDocument();
    expect(heading.querySelector('strong')).toBeInTheDocument();
  });
});