import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  mockIntersectionObserver.mockImplementation((callback) => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    callback
  }));

  global.IntersectionObserver = mockIntersectionObserver;
  vi.clearAllMocks();
});

describe('useIntersectionObserver', () => {
  it('initializes with empty visible items set', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.current.visibleItems).toEqual(new Set());
    expect(typeof result.current.registerElement).toBe('function');
  });

  it('creates IntersectionObserver with default options', () => {
    renderHook(() => useIntersectionObserver());

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
    );
  });

  it('creates IntersectionObserver with custom options', () => {
    const customOptions = { threshold: 0.5, rootMargin: '10px' };
    renderHook(() => useIntersectionObserver(customOptions));

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining(customOptions)
    );
  });

  it('registers elements for observation', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const mockElement = document.createElement('div');

    act(() => {
      result.current.registerElement(mockElement);
    });

    expect(mockObserve).toHaveBeenCalledWith(mockElement);
  });

  it('does not observe null elements', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    act(() => {
      result.current.registerElement(null);
    });

    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('adds visible items when entries intersect', () => {
    let observerCallback: (entries: IntersectionObserverEntry[]) => void;

    mockIntersectionObserver.mockImplementation((callback) => {
      observerCallback = callback;
      return { observe: mockObserve, disconnect: mockDisconnect };
    });

    const { result } = renderHook(() => useIntersectionObserver());

    const mockEntry = {
      isIntersecting: true,
      target: { id: 'test-element' }
    } as IntersectionObserverEntry;

    act(() => {
      observerCallback([mockEntry]);
    });

    expect(result.current.visibleItems.has('test-element')).toBe(true);
  });

  it('disconnects observer on unmount', () => {
    const { unmount } = renderHook(() => useIntersectionObserver());

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});
