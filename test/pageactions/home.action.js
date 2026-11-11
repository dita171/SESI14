import HomePage from '../pageobjects/home.page.js'

export class HomeAction {
    async verifyHomePage () {
        const filterButton = await $(HomePage.filterButton)
        const burgerMenuButton = await $(HomePage.burgerMenuButton)
        const productImage = await $(HomePage.productImage, { strict: false })

        await filterButton.waitForExist({ timeout: 5000 })
        await burgerMenuButton.waitForExist({ timeout: 5000 })
        await productImage.waitForExist({ timeout: 5000 })

        const isFilterDisplayed = await filterButton.isDisplayed()
        const isBurgerDisplayed = await burgerMenuButton.isDisplayed()
        const isProductDisplayed = await productImage.isDisplayed()

        return isFilterDisplayed && isBurgerDisplayed && isProductDisplayed
    }

    async tapFirstProduct () {
        const productImage = await $(HomePage.productImage, { strict: false })
        await productImage.click()
    }

    async tapBurgerMenu () {
        const burgerMenuButton = await $(HomePage.burgerMenuButton)
        await burgerMenuButton.click()
    }

    async tapBackToProducts () {
        const backToProductsButton = await $(HomePage.backToProductsButton)
        await backToProductsButton.click()
    }

    async tapLogout () {
        const logoutButton = await $(HomePage.logoutButton)
        await logoutButton.click()
    }

    async tapFilter () {
        const filterButton = await $(HomePage.filterButton)
        await filterButton.click()
    }

    async sortProductsByNameAscending () {
        const sortOption = await $(HomePage.sortNameAscending)
        await sortOption.waitForDisplayed({ timeout: 5000 })
        await sortOption.click()
    }

    async getProductNames () {
        await browser.waitUntil(async () =>
            (await $$(HomePage.productName)).length > 0, {
            timeout: 10000,
            timeoutMsg: 'No product names are displayed on the product list'
        })

        const productNames = await $$(HomePage.productName)
        await productNames[0].waitForDisplayed({ timeout: 5000 })
        const names = []

        for (let index = 0; index < productNames.length; index += 1) {
            names.push(await productNames[index].getText())
        }

        return names
    }

    async tapCancel () {
        const cancelButton = await $(HomePage.cancelButton)
        await cancelButton.click()
    }

    async tapAddToCart () {
        const addToCartButtons = await $$(HomePage.addToCartButton)
        if (addToCartButtons.length === 0) {
            throw new Error('No add-to-cart button is displayed on the product list')
        }

        const addToCartButton = addToCartButtons[0]
        await addToCartButton.waitForExist({ timeout: 5000 })
        await addToCartButton.click()
    }
}