import { HomeAction } from '../test/pageactions/home.action.js'
import { AppHelper } from '../test/helpers/app_helper.js'

describe('Mobile Automation Test - Login, Sorting, and Logout', () => {
    const homeAction = new HomeAction()
    const appHelper = new AppHelper()

    beforeEach(async () => {
        await appHelper.ensureLoggedOut()
    })

    afterEach(async () => {
        await appHelper.ensureLoggedOut()
    })

    it('should remain on the login page after a failed login', async () => {
        await appHelper.loginWithInvalidCredentials()
        await appHelper.loginAction.waitForLoginPage()

        expect(await appHelper.loginAction.isLoginPageDisplayed()).toBe(true)
    })

    it('should log in successfully with valid credentials', async () => {
        await appHelper.loginWithValidCredentials()

        expect(await homeAction.verifyHomePage()).toBe(true)
    })

    it('should sort products by name in ascending order', async () => {
        await appHelper.ensureLoggedIn()
        await homeAction.tapFilter()
        await homeAction.sortProductsByNameAscending()

        const productNames = await homeAction.getProductNames()
        const sortedProductNames = [...productNames].sort((first, second) =>
            first.localeCompare(second)
        )

        expect(productNames.length).toBeGreaterThan(0)
        expect(productNames).toEqual(sortedProductNames)
    })

    it('should log out and return to the login page', async () => {
        await appHelper.ensureLoggedIn()
        await homeAction.tapBurgerMenu()
        await homeAction.tapLogout()
        await appHelper.loginAction.waitForLoginPage()

        expect(await appHelper.loginAction.isLoginPageDisplayed()).toBe(true)
    })
})
