import { render, screen, fireEvent, rerender } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ThemeToggle from '@/components/common/ThemeToggle';

describe.skip('ThemeToggle', () => {
  it('renders with light theme icon', () => {
    const mockToggle = vi.fn();
    render(<ThemeToggle theme="light" onToggle={mockToggle} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('🌙');
  });

  it('renders with dark theme icon', () => {
    const mockToggle = vi.fn();
    render(<ThemeToggle theme="dark" onToggle={mockToggle} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('☀️');
  });

  it('calls onToggle when clicked', () => {
    const mockToggle = vi.fn();
    render(<ThemeToggle theme="light" onToggle={mockToggle} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('has correct accessibility attributes', () => {
    const mockToggle = vi.fn();
    render(<ThemeToggle theme="light" onToggle={mockToggle} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('updates aria-label based on current theme', () => {
    const mockToggle = vi.fn();
    const { rerender } = render(<ThemeToggle theme="light" onToggle={mockToggle} />);

    let button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');

    rerender(<ThemeToggle theme="dark" onToggle={mockToggle} />);
    button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('correctly toggles theme when clicked', () => {
    const mockToggle = vi.fn();
    const { rerender } = render(<ThemeToggle theme="light" onToggle={mockToggle} />);

    let button = screen.getByRole('button');
    expect(button).toHaveTextContent('🌙');
    expect(mockToggle).toHaveBeenCalledTimes(0); // Ensure toggle hasn't been called yet

    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledTimes(1);

    rerender(<ThemeToggle theme="dark" onToggle={mockToggle} />);
    button = screen.getByRole('button');
    expect(button).toHaveTextContent('☀️');
    expect(mockToggle).toHaveBeenCalledTimes(1); // Ensure toggle function has been called
  });
});
