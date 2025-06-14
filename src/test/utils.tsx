import React from 'react';
import { render, type RenderOptions } from '@testing-library/react';

// Custom render function that includes providers if needed
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  // Add any providers here if needed in the future
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Test data factories
export const createMockStat = (overrides = {}) => ({
  id: 'test-stat',
  number: '10+',
  label: 'Test Stat',
  color: 'from-blue-500 to-cyan-500',
  ...overrides
});

export const createMockSkill = (overrides = {}) => ({
  name: 'Test Skill',
  level: 80,
  years: '5+ years',
  category: 'proficient' as const,
  ...overrides
});

export const createMockExperience = (overrides = {}) => ({
  id: 'test-job',
  title: 'Test Title',
  company: 'Test Company',
  date: 'Jan 2020 - Present',
  highlights: ['Test highlight 1', 'Test highlight 2'],
  ...overrides
});

export const createMockInnovation = (overrides = {}) => ({
  id: 'test-innovation',
  icon: '🚀',
  title: 'Test Innovation',
  description: 'Test description',
  ...overrides
});

export const createMockAchievement = (overrides = {}) => ({
  id: 'test-achievement',
  icon: '🏆',
  title: 'Test Achievement',
  description: 'Test achievement description',
  ...overrides
});
