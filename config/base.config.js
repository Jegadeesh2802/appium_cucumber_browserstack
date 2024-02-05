exports.config = {
    hostname: 'hub-cloud.browserstack.com',
    port: 443,
    user: "jegadeesh_kQuCty",
    key: "gzBax7FXx7Gr9TWqp8dL",
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [['browserstack', {
        
        testObservability: true,
        testObservabilityOptions: {
            'projectName': "First cry application",
            'buildName': "PROFILE AND SHOPPING CART TEST RUN",
            'buildTag': 'WDIO',
        },
    }]],
    framework: 'cucumber',
    reporters: [
        // Like this with the default options
        'cucumberjs-json',
        // OR like this if you want to set the folder and the language
        [
          'cucumberjs-json',
          {
            jsonFolder: '.tmp/new/',
            language: 'en',
          },
        ],
      ],

    // reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./tests/steps/firstcryApp/firstcryApp.profile.steps.js'],
        // require: ['./tests/steps/demoApp.steps.js'],

        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
}
