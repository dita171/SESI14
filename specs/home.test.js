import HomeAction from '../test/pageactions/home.action.js'

describe('Mobile Automation Test - Home Page', () => {
    const homeAction = new HomeAction()

    it('should verify home page elements and add product to cart', async () => {
        
        const isVerified = await homeAction.verifyHomePage()
        expect(isVerified).toBe(true) 

        await homeAction.tapAddToCart()
    })
})