import { test, expect } from '@playwright/test';

test.describe('Multi Tenant Validation', () => {

  test('Company2 user should only see Company2 projects', async ({ page }) => {

    await page.goto('https://app.workflowpro.com/login', {
      waitUntil: 'networkidle'
    });

    await page.fill('#email', 'user@company2.com');
    await page.fill('#password', 'password123');

    await Promise.all([
      page.waitForURL('**/dashboard'),
      page.click('#login-btn')
    ]);

    await expect(page.locator('.project-card').first()).toBeVisible({
      timeout: 15000
    });

    const projects = page.locator('.project-card');

    const count = await projects.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {

      await expect(projects.nth(i)).toContainText('Company2');

    }

  });

});