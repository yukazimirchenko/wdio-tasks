export const deelElements = {
    get getRole() { return $(`[placeholder="Select a role"]`) },
    get getCountry() { return $(`[placeholder="Select a country"]`) },
    get submitBtn() { return $(`[type="submit"]`) },

    selectValue(value: string) { return $(`//div[.="${value}"]`) },

    get chart() { return $(`[data-qa="salary-table"]`) },
    get chartTitle() { return $(`//*[@data-qa="salary-table"]/h2`) },
    get tooltip() { return $(`//*[role="presentation"]`) }
}

export const gitElements = {
    get userName() { return $('#login_field') },
    get password() { return $('#password') },
    get submit() { return $('[value="Sign in"]') },
    get getHeader() { return $('.AppHeader') },

    selectrepo(repoName: string) { return $(`.dashboard-sidebar .wb-break-word [href="/${process.env.GIT_USER}/${repoName}"]`) },
    repoTitle(repoName: string) { return $(`//*[@itemprop='name']/a[.='${repoName}']`) },
    getButtons(buttonTitle: string) { return $(`//*[contains(text(),"${buttonTitle}")]`) },

    get fileName() { return $$(`[role="rowheader"]`)}

}
