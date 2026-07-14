import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ENV } from '../config/env';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    email = this.page.locator('#email');
    password = this.page.locator('#password');
    loginButton = this.page.locator('#login-btn');

    async open() {
        await this.navigate(ENV.baseURL + ENV.loginURL);
    }

    async login(email: string, password: string) {

        await this.fill(this.email, email);

        await this.fill(this.password, password);

        await Promise.all([
            this.page.waitForURL('**/dashboard'),
            this.click(this.loginButton)
        ]);

    }

}