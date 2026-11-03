export const config = {

   specs: [
    './specs/**/*.js'
],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': '110711941G004650', 
        'appium:app': './demo.apk',
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}