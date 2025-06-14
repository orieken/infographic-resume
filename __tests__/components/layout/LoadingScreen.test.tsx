import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoadingScreen from '@/components/layout/LoadingScreen';

describe('LoadingScreen', () => {
  it('renders loading message', () => {
    render(<LoadingScreen />);

    expect(screen.getByText('Loading Resume')).toBeInTheDocument();
    expect(screen.getByText('Initializing AI-powered experience...')).toBeInTheDocument();
  });

  it('has correct styling for full screen overlay', () => {
    const { container } = render(<LoadingScreen />);

    const loadingDiv = container.firstChild as HTMLElement;
    expect(loadingDiv).toHaveClass('fixed', 'inset-0', 'z-50');
    expect(loadingDiv).toHaveClass('bg-gradient-to-br', 'from-blue-600', 'via-purple-600', 'to-indigo-800');
  });

  it('renders spinning animation', () => {
    const { container } = render(<LoadingScreen />);

    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('rounded-full', 'h-16', 'w-16', 'border-4');
  });
});

