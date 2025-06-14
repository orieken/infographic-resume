import { describe, it, expect } from 'vitest';
import { resumeData } from '@/data/resumeData';

describe('resumeData', () => {
  it('has all required sections', () => {
    expect(resumeData).toHaveProperty('personalInfo');
    expect(resumeData).toHaveProperty('stats');
    expect(resumeData).toHaveProperty('skillCategories');
    expect(resumeData).toHaveProperty('innovations');
    expect(resumeData).toHaveProperty('experience');
    expect(resumeData).toHaveProperty('achievements');
    expect(resumeData).toHaveProperty('education');
  });

  it('has valid personal info structure', () => {
    const { personalInfo } = resumeData;

    expect(personalInfo).toHaveProperty('name');
    expect(personalInfo).toHaveProperty('tagline');
    expect(personalInfo).toHaveProperty('contacts');
    expect(Array.isArray(personalInfo.contacts)).toBe(true);
    expect(personalInfo.contacts.length).toBeGreaterThan(0);
  });

  it('has valid stats with required properties', () => {
    expect(Array.isArray(resumeData.stats)).toBe(true);

    resumeData.stats.forEach(stat => {
      expect(stat).toHaveProperty('id');
      expect(stat).toHaveProperty('number');
      expect(stat).toHaveProperty('label');
      expect(stat).toHaveProperty('color');
    });
  });

  it('has valid skill categories with skills', () => {
    expect(Array.isArray(resumeData.skillCategories)).toBe(true);

    resumeData.skillCategories.forEach(category => {
      expect(category).toHaveProperty('id');
      expect(category).toHaveProperty('title');
      expect(category).toHaveProperty('icon');
      expect(category).toHaveProperty('skills');
      expect(Array.isArray(category.skills)).toBe(true);

      category.skills.forEach(skill => {
        expect(skill).toHaveProperty('name');
        expect(skill).toHaveProperty('level');
        expect(skill).toHaveProperty('years');
        expect(skill).toHaveProperty('category');
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
        expect(['expert', 'proficient', 'intermediate']).toContain(skill.category);
      });
    });
  });

  it('has valid experience entries', () => {
    expect(Array.isArray(resumeData.experience)).toBe(true);

    resumeData.experience.forEach(job => {
      expect(job).toHaveProperty('id');
      expect(job).toHaveProperty('title');
      expect(job).toHaveProperty('company');
      expect(job).toHaveProperty('date');
      expect(job).toHaveProperty('highlights');
      expect(Array.isArray(job.highlights)).toBe(true);
    });
  });
});
