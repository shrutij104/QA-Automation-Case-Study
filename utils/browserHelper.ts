import { Browser, BrowserContext, chromium } from '@playwright/test';

export class BrowserHelper {

    static browser: Browser;

    static async createContext(): Promise<BrowserContext> {

        this.browser = await chromium.launch({
            headless: true
        });

        return await this.browser.newContext();

    }

    static async closeBrowser() {

        await this.browser.close();

    }

}