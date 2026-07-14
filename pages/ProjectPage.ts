import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProjectPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    searchBox = this.page.locator("#search-project");

    projectCard = this.page.locator(".project-card");

    async searchProject(projectName: string) {

        await this.fill(this.searchBox, projectName);

    }

    async verifyProject(projectName: string) {

        await expect(this.projectCard).toContainText(projectName);

    }

}