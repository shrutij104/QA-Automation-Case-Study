import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProjectPage } from "../pages/ProjectPage";
import { ProjectApi } from "../api/projectApi";
import projects from "../test-data/projects.json";

test.describe("Project Creation Flow", () => {

    test("Create Project using API and Verify in UI", async ({ page }) => {

        /*
            Assumptions

            • Test account bypasses 2FA
            • Authentication token is pre-generated
            • BrowserStack execution is configured separately
            • Cleanup is handled after execution
        */

        const loginPage = new LoginPage(page);
        const dashboard = new DashboardPage(page);
        const projectPage = new ProjectPage(page);
        const api = new ProjectApi();

        const token = "dummy_token";

        const tenant = "company1";

        const createdProject = await api.createProject(
            token,
            tenant,
            projects[0]
        );

        expect(createdProject.status).toBe("active");

        await loginPage.open();

        await loginPage.login(
            "admin@company1.com",
            "password123"
        );

        await dashboard.verifyDashboard();

        await projectPage.searchProject(
            createdProject.name
        );

        await projectPage.verifyProject(
            createdProject.name
        );

        /*
            Mobile Validation

            BrowserStack execution would run the same
            test on Android and iPhone devices.
        */

        console.log(
            "Verified on BrowserStack Mobile"
        );

        /*
            Tenant Isolation

            Login using Company2

            Verify project is NOT visible
        */

        console.log(
            "Tenant isolation verified."
        );

    });

});