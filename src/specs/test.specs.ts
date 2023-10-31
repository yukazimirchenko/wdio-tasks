import { deelElements } from "../core/locators";
import { HttpMethods } from "../core/rest";

describe(`Deel test`, async () => {

    const deelURL = process.env.TEST_URL;
    const role = 'QA Engineer'; 
    const country = 'Canada';
    const array12 = []


    it(`should display defined Role & Country in the header of the chart`, async () => {
        await browser.url(deelURL);
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 30 * 1000, // 60 seconds
                timeoutMsg: 'Page is not loaded'
            }
        );
        await (await deelElements.getRole).waitForDisplayed();
        await (await deelElements.getRole).click();
        await browser.pause(1000);
        await (await deelElements.selectValue(role)).scrollIntoView();
        await browser.pause(1000);
        await (await deelElements.selectValue(role)).click();
        await browser.pause(1000);
        expect(await (await deelElements.getRole).getAttribute('value')).toEqual(role);
        await (await deelElements.getCountry).click();
        await (await deelElements.selectValue(country)).scrollIntoView();
        await browser.pause(1000);
        await (await deelElements.selectValue(country)).click();
        await browser.pause(1000);
        expect(await (await deelElements.getCountry).getAttribute('value')).toEqual(country);
        await browser.pause(1000);
        await (await deelElements.submitBtn).click();
        await (await deelElements.chart).waitForDisplayed();
        await (await deelElements.chartTitle).waitForDisplayed();
        expect(await (await deelElements.chartTitle).getText()).toContain(role);
        expect(await (await deelElements.chartTitle).getText()).toContain(country);
    })

    it.skip(`should work only with values from dd list` , async () => {
        await browser.url(deelURL);
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 30 * 1000, // 60 seconds
                timeoutMsg: 'Page is not loaded'
            }
        );
        await (await deelElements.getRole).setValue('Yulia');
        expect(await (await deelElements.tooltip).getText()).toContain('No results found')

    });

})