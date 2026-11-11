import LoginPage from '../pageobjects/login.page.js'

export class LoginAction {
    async isLoginPageDisplayed () {
        const usernameInput = await $(LoginPage.usernameInput)
        const passwordInput = await $(LoginPage.passwordInput)
        const loginButton = await $(LoginPage.loginButton)

        return await usernameInput.isDisplayed() &&
            await passwordInput.isDisplayed() &&
            await loginButton.isDisplayed()
    }

    async waitForLoginPage () {
        const loginButton = await $(LoginPage.loginButton)
        await loginButton.waitForDisplayed({ timeout: 5000 })
    }

    async login (username, password) {
        const usernameInput = await $(LoginPage.usernameInput)
        const passwordInput = await $(LoginPage.passwordInput)
        const loginButton = await $(LoginPage.loginButton)

        await usernameInput.setValue(username)
        await passwordInput.setValue(password)
        await loginButton.click()
    }
}
