import homePage from '../pageobjects/home.page.js'

export class HomeAction {
    async verifyHomePage () {
        const filterButton = await $(homePage.filterButton)
        const burgerMenuButton = await $(homePage.burgerMenuButton)
        const addToCartButton = await $(homePage.addToCartButton)

        await filterButton.waitForExist({ timeout: 5000 })
        await burgerMenuButton.waitForExist({ timeout: 5000 })
        await addToCartButton.waitForExist({ timeout: 5000 })

        const isFilterDisplayed = await filterButton.isDisplayed()
        const isBurgerDisplayed = await burgerMenuButton.isDisplayed()
        const isAddToCartDisplayed = await addToCartButton.isDisplayed()

        return isFilterDisplayed && isBurgerDisplayed && isAddToCartDisplayed
    }

    async tapBurgerMenu () {
        
        const burgerMenuButton = await $(homePage.burgerMenuButton) 
        await burgerMenuButton.click()
    }

    async tapLogout () {
        const logoutButton = await $(homePage.logoutButton)
        await logoutButton.click()
    }

    async tapFilter () {
        const filterButton = await $(homePage.filterButton)
        await filterButton.click()
    }

    async tapCancel () {
        const cancelButton = await $(homePage.cancelButton)
        await cancelButton.click()
    }

    async tapAddToCart () {
        const addToCartButton = await $(homePage.addToCartButton)
        await addToCartButton.click()
    }
}