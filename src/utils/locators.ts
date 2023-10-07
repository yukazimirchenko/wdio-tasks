export const deelElements = {
    get getRole() { return $(`[placeholder="Select a role"]`)},
    get getCountry() { return $(`[placeholder="Select a country"]`)},
    get submitBtn() { return $(`[type="submit"]`)},

    selectValue(value: string) {return $(`//div[.="${value}"]`)}, 

    get chart() { return $(`[data-qa="salary-table"]`)},
    get chartTitle() { return $(`//*[@data-qa="salary-table"]/h2`)},
    get tooltip() { return $(`//*[role="presentation"]`)}


}
