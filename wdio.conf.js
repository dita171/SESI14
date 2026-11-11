export const config = {

   specs: [
    './specs/**/*.js'
],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'a122242b',
        'appium:app': './apk/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': 'com.swaglabsmobileapp.SplashActivity',
        'appium:appWaitActivity': 'com.swaglabsmobileapp.*',
        'appium:noReset': true,
        'appium:forceAppLaunch': true,
        'appium:ignoreHiddenApiPolicyError': true,
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}