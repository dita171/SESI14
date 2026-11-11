import { credentials } from '../../test_data/credentials.js'
import { HomeAction } from '../pageactions/home.action.js'
import { LoginAction } from '../pageactions/login.action.js'
import HomePage from '../pageobjects/home.page.js'

export class AppHelper {
    constructor () {
        this.homeAction = new HomeAction()
        this.loginAction = new LoginAction()
    }

    async activateApp () {
        await driver.activateApp('com.swaglabsmobileapp')
        await browser.waitUntil(async () =>
            await this.loginAction.isLoginPageDisplayed() ||
            await this.isHomePageDisplayed() ||
            await this.isProductDetailsDisplayed(), {
            timeout: 15000,
            timeoutMsg: 'Swag Labs did not show a known page. Unlock the phone and try again.'
        })
    }

    async isHomePageDisplayed () {
        const homePage = await $(HomePage.filterButton)
        return homePage.isDisplayed()
    }

    async isProductDetailsDisplayed () {
        const backToProductsButton = await $(HomePage.backToProductsButton)
        return backToProductsButton.isDisplayed()
    }

    async ensureLoggedIn () {
        await this.activateApp()

        if (await this.isProductDetailsDisplayed()) {
            await this.homeAction.tapBackToProducts()
            return
        }

        const homePage = await $(HomePage.filterButton)

        if (await homePage.isDisplayed()) {
            return
        }

        if (!await this.loginAction.isLoginPageDisplayed()) {
            throw new Error('Neither the login page nor the home page is displayed')
        }

        await this.loginAction.login(credentials.valid.username, credentials.valid.password)
        await homePage.waitForDisplayed({ timeout: 5000 })
    }

    async ensureLoggedOut () {
        await this.activateApp()

        if (await this.loginAction.isLoginPageDisplayed()) {
            return
        }

        if (await this.isProductDetailsDisplayed()) {
            await this.homeAction.tapBackToProducts()
        }

        await this.homeAction.tapBurgerMenu()
        await this.homeAction.tapLogout()
        await this.loginAction.waitForLoginPage()
    }

    async loginWithValidCredentials () {
        await this.loginAction.login(credentials.valid.username, credentials.valid.password)
    }

    async loginWithInvalidCredentials () {
        await this.loginAction.login(credentials.invalid.username, credentials.invalid.password)
    }
}
