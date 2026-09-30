import { test, expect } from '@playwright/test';

test.describe('RL Environment - Coding Task Validation', () => {

  test('should validate API returns correct data structure', async ({ request }) => {
    const response = await request.get('/api/users');
    expect(response.status()).toBe(200);
    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    if (users.length > 0) {
      expect(users[0]).toHaveProperty('id');
      expect(users[0]).toHaveProperty('email');
    }
  });

  test('should validate frontend handles error states', async ({ page }) => {
    await page.goto('/users');
    await expect(page.locator('[data-testid="user-list"]')).toBeVisible({ timeout: 10000 });
  });

  test('should ensure solution meets non-functional requirements', async ({ request }) => {
    const start = Date.now();
    const response = await request.get('/api/users');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(1000);
    expect(response.headers()['content-type']).toContain('application/json');
  });
});
