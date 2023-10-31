import { config } from '../../wdio.conf';
import AllureReporter from '@wdio/allure-reporter';

const unirest: any = require('unirest');

export class HttpMethods {

    static async get(baseUrl: string = config.baseUrl, endpoint: string, headers: object): Promise<any> {
        return new Promise(async (resolve) => {
            AllureReporter.startStep(`GET request`);
            await unirest.get(baseUrl + endpoint)
                .headers(headers)
                .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    })
                })
            AllureReporter.endStep();
        })
    }

    static async post(baseUrl: string = config.baseUrl, endpoint: string, headers: object, data: any): Promise<any> {
        return new Promise(async (resolve) => {
            AllureReporter.startStep(`POST request`);
            await unirest.post(baseUrl + endpoint)
                .headers(headers)
                .send(data)
                .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    })
                })
            AllureReporter.endStep();
        })
    }

    static async put(baseUrl: string = config.baseUrl, endpoint: string, headers: object, data: any): Promise<any> {
        return new Promise(async (resolve) => {
            AllureReporter.startStep(`PUT request`);
            await unirest.put(baseUrl + endpoint)
                .headers(headers)
                .send(data)
                .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    });
                });
            AllureReporter.endStep();
        })
    }

    static async patch(baseUrl: string = config.baseUrl, endpoint: string, headers: object, data: any): Promise<any> {
        return new Promise(async (resolve) => {
            AllureReporter.startStep(`PATCH request`);
            await unirest.patch(baseUrl + endpoint)
                .headers(headers)
                .send(data)
                .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    });
                })
            AllureReporter.endStep();
        })
    }

    static async delete(baseUrl: string = config.baseUrl, endpoint: string, headers: object): Promise<any> {
        return new Promise(async (resolve) => {
            AllureReporter.startStep(`DELETE request`);
            await unirest.patch(baseUrl + endpoint)
                .headers(headers)
                .end((response) => {
                    resolve({
                        status: response.status,
                        headers: response.headers,
                        body: response.body
                    });
                });
            AllureReporter.endStep();
        })
    }

};

export const httpMethods = new HttpMethods();