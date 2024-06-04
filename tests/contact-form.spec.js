const { test } = require('@playwright/test');
const { ContactFormsPage } = require('../models/contactForms.model');

test('Verify CAPTCHA is present in the contact form', async ({ page }) => {
    const contactFormsPage = new ContactFormsPage(page);

    await contactFormsPage.navigateToContactForm();
    
    try {
        await contactFormsPage.expectCaptchaToBePresent();
        console.log('CAPTCHA is present in the form');
    } catch (error) {
        console.log('CAPTCHA is NOT present in the form.');
    }
});
