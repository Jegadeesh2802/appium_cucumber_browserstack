const {config} = require('./base.config')
config.cucumberOpts.tagExpression = "@Sample"
exports.config = {
    ...config,
    specs: [
        './tests/features/firstcryApp.feature'
    ],
    exclude: [
       
    ],
    maxInstances: 15,
    capabilities: [{
        platformName:'android',
        "appium:deviceName":'OnePlus 9',
        "appium:platformVersion":"11.0",
        "appium:app": 'bs://a88fd248ed91e5be25aecd5722c744ffc46df51e',
        'bstack:options' : {
            "appiumVersion" : "2.0.0",
            "buildName" : `Test Build`,  
            "projectName":"Sample Appium Test",
        },
    },    
    // {
    //     platformName: 'iOS',
    //     "appium:deviceName": 'iPhone 13',
    //     "appium:platformVersion":"15.0",
    //     "appium:app": 'bs://31e7a04a670ccb68ae69551df8af3f4361dd93c7',
    //     'bstack:options' : {
    //         "appiumVersion" : "2.0.0",  
    //         "buildName" : `Wdio Browserstack Cucumber - ${new Date().toDateString()}`,
    //         "projectName":"Browserstack Test"
    //     },
    // }
]
}
