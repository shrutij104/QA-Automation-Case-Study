import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test('User should login successfully', async ({ page }) => {

    await page.goto('https://app.workflowpro.com/login', {
      waitUntil: 'networkidle'
    });

    await expect(page.locator('#email')).toBeVisible();

    await page.fill('#email', 'admin@company1.com');
    await page.fill('#password', 'password123');

    await Promise.all([
      page.waitForURL('**/dashboard'),
      page.click('#login-btn')
    ]);

    await expect(page).toHaveURL(/dashboard/);

    const welcomeMessage = page.locator('.welcome-message');

    await expect(welcomeMessage).toBeVisible({
      timeout: 10000
    });

    await expect(welcomeMessage).toContainText('Welcome');
  });

});