import { gitURL } from "../testData/gitData";
import { gitElements } from "./locators";

class GitCommon {
    async gitLogin(username: string, password: string): Promise<void> {
        await browser.url(gitURL);
        await gitElements.userName.setValue(username);
        await gitElements.password.setValue(password);
        await (await gitElements.submit).click();
        await (await gitElements.getHeader).waitForDisplayed();
    };

    async openRepo(repoName: string): Promise<void> {
        await (await gitElements.selectrepo(repoName)).waitForDisplayed();
        expect(await (await gitElements.selectrepo(repoName)).isDisplayed()).toBe(true);
        await (await gitElements.selectrepo(repoName)).click();
        expect(await (await gitElements.repoTitle(repoName)).isDisplayed()).toBe(true);
    }
}

export const gitCommon = new GitCommon();