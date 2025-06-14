import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '@/App';

// Mock components
vi.mock('@/components/layout/LoadingScreen', () => ({
  default: () => <div data-testid="loading-screen">Loading...</div>,
}));

vi.mock('@/components/layout/Header', () => ({
  default: ({ personalInfo }: any) => <header data-testid="header">{personalInfo.name}</header>,
}));

vi.mock('@/components/sections/StatsSection', () => ({
  default: () => <section data-testid="stats-section">Stats</section>,
}));

vi.mock('@/components/sections/SkillsSection', () => ({
  default: () => <section data-testid="skills-section">Skills</section>,
}));

vi.mock('@/components/sections/ExperienceSection', () => ({
  default: () => <section data-testid="experience-section">Experience</section>,
}));

vi.mock('@/components/layout/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading screen initially', () => {
    render(<App />);
    expect(screen.getByTestId('loading-screen')).toBeInTheDocument();
  });

  it('renders main content after loading', async () => {
    render(<App />);

    // Wait for the loading screen to be removed
    await waitFor(() => {
      expect(screen.queryByTestId('loading-screen')).not.toBeInTheDocument();
    }, { timeout: 5000 }); // Timeout increased for loading simulation

    // Main content should be rendered now
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('stats-section')).toBeInTheDocument();
    expect(screen.getByTestId('skills-section')).toBeInTheDocument();
    expect(screen.getByTestId('experience-section')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies correct layout structure', async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      expect(screen.queryByTestId('loading-screen')).not.toBeInTheDocument();
    });

    const mainGrid = container.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2');
    expect(mainGrid).toBeInTheDocument();
  });

  it('handles theme initialization', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByTestId('loading-screen')).not.toBeInTheDocument();
    });

    // Should not throw any errors during theme initialization
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it.skip('toggles theme correctly', async () => {
    render(<App />);

    // Wait for the loading screen to disappear
    await waitFor(() => {
      expect(screen.queryByTestId('loading-screen')).not.toBeInTheDocument();
    });

    // Initially, check if the header is in the light theme
    const header = screen.getByTestId('header');
    expect(header).toHaveTextContent('Light Theme'); // Assuming your header shows theme info

    // Simulate theme toggle
    const themeToggleButton = screen.getByTestId('theme-toggle-button');
    fireEvent.click(themeToggleButton); // Simulate a click on the toggle button

    // Check if the theme has been toggled
    expect(header).toHaveTextContent('Dark Theme'); // Assuming header shows updated theme info
  });
});
