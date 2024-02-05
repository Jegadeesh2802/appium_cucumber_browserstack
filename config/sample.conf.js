const {config} = require('./base.config')
config.cucumberOpts.tagExpression = "@Sample"
exports.config = {
    ...config,
    specs: [
        './tests/features/firstcryApp/firstcryApp.profile.feature'
        // './tests/features/demoApp.feature'

    ],
    exclude: [
       
    ],
    maxInstances: 15,
    capabilities: [{
        
        platformName:'android',
        "appium:deviceName":'OnePlus 9',
        "appium:platformVersion":"11.0",

        "appium:app": 'bs://e638d2c03fc41281bc8478a53c001c3df174d9fe',
        // "appium:app": 'bs://a88fd248ed91e5be25aecd5722c744ffc46df51e',
        // "appium:app": 'bs://4738ebdf4333cf85c14267d5376101084cf04dc8', //<=== DemoApp

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
    //     // "appium:app": 'bs://31e7a04a670ccb68ae69551df8af3f4361dd93c7',
    //     "appium:app": 'bs://35a135e437c83133e49db491835fce935c530601', //<=== DemoApp
    //     'bstack:options' : {
    //         "appiumVersion" : "2.0.0",  
    //         "buildName" : `Test Build`,  
    //         "projectName":"Sample Appium Test",
    //     },
    // }
]
}
