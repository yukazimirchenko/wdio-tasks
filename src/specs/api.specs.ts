import AllureReporter from "@wdio/allure-reporter";
import { gorestHeaders, restHost, restUrl } from "../testData/gorestData";
import { randoms } from "../utils/randomGenerator";
import { HttpMethods } from "../core/rest";

describe(`Go Rest API `, () => {

    let userId: number;
    let newUser: any;

    before(async () => {
        newUser = {
            name: 'YuLee_' + randoms.getString(4),
            gender: "female",
            email: randoms.getString(8) + "_test@harakirimail.com",
        };
    });

    it(`should Get All Users `, async () => {
        let getResponse = await HttpMethods.get(restHost, restUrl, {});
        //console.log(getResponse.body)
        expect(getResponse.status).toEqual(200)
        AllureReporter.addStep(`Actual status is ${getResponse.status}`);
        expect(getResponse.body.length).toBeGreaterThan(1);
        AllureReporter.addStep(`Actual number of users is ${getResponse.body.length}`);
    });

    it(`should create new user`, async () => {
        let body = {
            name: newUser.name ,
            gender: "female",
            email: newUser.email,
            status: "active"
        };
        let getResponse = await HttpMethods.post(restHost, restUrl, gorestHeaders, body);
        expect(getResponse.status).toEqual(201);
        console.log(getResponse.body)
        expect(getResponse.body.name).toEqual(newUser.name);
        expect(getResponse.body.email).toEqual(newUser.email);
        userId = getResponse.body.id
    });

    it(`should get the created user `, async () => {
        let getResponse = await HttpMethods.get(restHost, restUrl + userId, gorestHeaders);
        //console.log(getResponse.body)
        expect(getResponse.status).toEqual(200);
    });

})