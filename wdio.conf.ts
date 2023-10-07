import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },

    specs: [
        'src/specs/*.specs.ts'
    ],
    suites: {
        api: [
            './src/specs/api.specs.ts',
        ]
    },

    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--window-size=1920,1080',
                '--disable-extensions',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--no-sandbox',
            ],
        }
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        ['spec', {
            addConsoleLogs: true,
            showPreface: false,
        }],
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        retries: 0
    },
    //
    // =====
    // Hooks
    // =====

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
