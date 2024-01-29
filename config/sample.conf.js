const {config} = require('./base.config')
config.cucumberOpts.tagExpression = "@Sample"
exports.config = {
    ...config,
    specs: [
        './tests/features/login.feature'
    ],
    exclude: [
       
    ],
    maxInstances: 15,
    capabilities: [{
        platformName:'android',
        "appium:deviceName":'OnePlus 9',
        "appium:platformVersion":"11.0",
        "appium:app": 'bs://5cdcf0d2efc4ccf6465dc8044d53b642d5ed7942',
        // "appium:app": 'bs://02a3a17f0d73b6f74936c3cb75c0ebba101f1eef',//--sample app
        // "appium:app": 'bs://08b7183b36d0a2dfdc4995c30adce65407274adc',--Amazon App
        'bstack:options' : {
            "appiumVersion" : "2.0.0",
            "buildName" : `Wdio Browserstack Cucumber - ${new Date().toDateString()}`,  
            "projectName":"Browserstack Test",
            "networkProfile": "2g-gprs-good",
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
