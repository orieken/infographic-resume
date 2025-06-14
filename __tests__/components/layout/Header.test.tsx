import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/layout/Header';
import { MapPin, Mail, Phone } from 'lucide-react';

const mockPersonalInfo = {
  name: 'John Doe',
  tagline: 'Test Engineer',
  contacts: [
    { icon: MapPin, text: 'Test City, USA' },
    { icon: Mail, text: 'john@test.com', href: 'mailto:john@test.com' },
    { icon: Phone, text: '+1 234 567 8900', href: 'tel:+12345678900' }
  ]
};

describe('Header', () => {
  it('renders personal information correctly', () => {
    render(<Header personalInfo={mockPersonalInfo} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test Engineer')).toBeInTheDocument();
  });

  it('renders all contact information', () => {
    render(<Header personalInfo={mockPersonalInfo} />);

    expect(screen.getByText('Test City, USA')).toBeInTheDocument();
    expect(screen.getByText('john@test.com')).toBeInTheDocument();
    expect(screen.getByText('+1 234 567 8900')).toBeInTheDocument();
  });

  it('renders contact links with correct href attributes', () => {
    render(<Header personalInfo={mockPersonalInfo} />);

    const emailLink = screen.getByRole('link', { name: /john@test.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:john@test.com');

    const phoneLink = screen.getByRole('link', { name: /\+1 234 567 8900/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:+12345678900');
  });

  it('renders contact items without links when href is not provided', () => {
    render(<Header personalInfo={mockPersonalInfo} />);

    const locationText = screen.getByText('Test City, USA');
    expect(locationText.closest('a')).toBeNull();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<Header personalInfo={mockPersonalInfo} />);

    const header = container.querySelector('header');
    expect(header).toHaveClass('bg-gradient-to-r', 'from-gray-800', 'to-gray-900', 'text-white');

    const name = screen.getByText('John Doe');
    expect(name).toHaveClass('text-5xl', 'font-bold', 'mb-4');
  });
});
