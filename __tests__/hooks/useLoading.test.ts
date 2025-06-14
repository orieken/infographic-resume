import { render, renderHook, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useLoading } from '@/hooks/useLoading';

describe('useLoading hook', () => {
  it('should set isLoading to false after timeout', async () => {
    const { result } = renderHook(() => useLoading(1000));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    }, { timeout: 2000 });
  });
});
