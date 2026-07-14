import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    welcomeMessage = this.page.locator('.welcome-message');

    projectCards = this.page.locator('.project-card');

    async verifyDashboard() {

        await expect(this.welcomeMessage).toBeVisible();

    }

    async verifyProjectsForTenant(tenant: string) {

        const count = await this.projectCards.count();

        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {

            await expect(
                this.projectCards.nth(i)
            ).toContainText(tenant);

        }

    }

}