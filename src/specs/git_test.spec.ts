import { gitCommon } from "../core/common.page";
import { gitElements } from "../core/locators";

describe(`GitHub Uploading File testing`, () => {
    
    it(`Create new file in repo`, async () => {
        await gitCommon.gitLogin(process.env.GIT_USER,process.env.GIT_PASSWORD); 
        await gitCommon.openRepo('test');

        await (await gitElements.getButtons('Add file')).waitForDisplayed();
        await (await gitElements.getButtons('Add file')).click();
        await (await gitElements.getButtons('Create new file')).click();
        expect(await browser.getUrl()).toContain('/new/master');
        await browser.pause(5000);
    })

    it(`Open existed repo and check existed file`, async () => {
        await gitCommon.gitLogin(process.env.GIT_USER,process.env.GIT_PASSWORD); 
        await gitCommon.openRepo('gorestio');
        let itemsArray = [];
        await gitElements.fileName.forEach(async (i) => {
            console.log(' -> ', await i.getText())
            itemsArray.push(await i.getText());
        })
        expect(itemsArray.includes('.gitignore')).toBe(true)
        await browser.pause(1000);
    })
})