import { HomeAction } from '../test/pageactions/home.action.js'
import { AppHelper } from '../test/helpers/app_helper.js'

describe('Mobile Automation Test - Home Page', () => {
    const homeAction = new HomeAction()
    const appHelper = new AppHelper()

    beforeEach(async () => {
        await appHelper.ensureLoggedIn()
    })

    afterEach(async () => {
        await appHelper.ensureLoggedOut()
    })

    it('should verify home page elements and add product to cart', async () => {
        const isVerified = await homeAction.verifyHomePage()
        expect(isVerified).toBe(true) 

        await homeAction.tapAddToCart()
    })
})