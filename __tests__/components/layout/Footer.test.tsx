import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/layout/Footer';

describe('Footer', () => {
  it('renders call-to-action content', () => {
    render(<Footer />);

    expect(screen.getByText('Ready to Transform Your Testing Strategy?')).toBeInTheDocument();
    expect(screen.getByText(/Let's discuss how AI-powered automation/)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<Footer />);

    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('bg-gradient-to-r', 'from-gray-800', 'to-gray-900', 'text-white');
  });
});
