const { expect } = require('@playwright/test');

exports.ContactFormsPage = class ContactFormsPage {
    constructor(page) {
        this.page = page;
        this.url = page.goto('https://annalisetestsite.staging005.townsquareinteractive.com/contact/');
    }

    async navigateToContactForm() {
        await this.url;
    }

    async expectCaptchaToBePresent() {
        const hCaptchaFrame = await this.page.$('iframe[src*="hcaptcha.com"]');
        const reCaptchaFrame = await this.page.$('iframe[src*="recaptcha"]');
        const isCaptchaPresent = hCaptchaFrame !== null || reCaptchaFrame !== null;

        expect(isCaptchaPresent).toBe(true);
    }
};
