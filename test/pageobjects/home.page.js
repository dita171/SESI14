class HomePage {
    
    get filterButton () { return '~test-Modal Selector Button' }
    get burgerMenuButton () { return '~test-Menu' }
    get backToProductsButton () { return '~test-BACK TO PRODUCTS' }
    get productImage () { return '//android.widget.TextView[@content-desc="test-Item title"]' }
    get productName () { return '//android.widget.TextView[@content-desc="test-Item title"]' }
    get addToCartButton () { return '~test-ADD TO CART' }
    get sortNameAscending () { return '//android.widget.TextView[@text="Name (A to Z)"]' }
    get logoutButton () { return '~test-LOGOUT' }
    get cancelButton () { return '//android.widget.TextView[@text="Cancel"]' }
}
export default new HomePage()