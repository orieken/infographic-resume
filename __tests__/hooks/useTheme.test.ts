
import { vi } from 'vitest';
import { useTheme } from '@/hooks/useTheme';
import { renderHook } from '@testing-library/react';

describe('useTheme hook', () => {
  it('should retrieve theme from localStorage', () => {
    // Mock localStorage to return 'dark'
    vi.stubEnv('localStorage', {
      getItem: vi.fn().mockReturnValue('dark'),
      setItem: vi.fn(),
    } as any);

    // Render the hook
    const { result } = renderHook(() => useTheme());

    // Assert that the theme is 'dark' as retrieved from localStorage
    expect(result.current.theme).toBe('dark');
  });

  it('should default to "light" theme if localStorage is empty', () => {
    // Mock localStorage to return null (i.e., no theme saved)
    vi.stubEnv('localStorage', {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
    } as any);

    // Render the hook
    const { result } = renderHook(() => useTheme());

    // Assert that the theme defaults to 'light'
    expect(result.current.theme).toBe('light');
  });

  it('should set theme in localStorage when toggled', () => {
    // Mock localStorage
    const setItemMock = vi.fn();
    vi.stubEnv('localStorage', {
      getItem: vi.fn().mockReturnValue('light'), // Initially light
      setItem: setItemMock, // Mock setItem
    } as any);

    // Render the hook
    const { result } = renderHook(() => useTheme());

    // Toggle the theme
    result.current.toggleTheme();

    // Assert that the theme has been toggled and set in localStorage
    expect(setItemMock).toHaveBeenCalledWith('theme', 'dark');
    expect(result.current.theme).toBe('dark'); // The theme should be 'dark' after toggle
  });
});
