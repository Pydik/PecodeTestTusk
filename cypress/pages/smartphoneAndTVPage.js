class SmartphoneAndTV {
    
    get mobilephone (){return cy.get('[href="https://rozetka.com.ua/ua/mobile-phones/c80003/"][class="tile-cats__picture"]')}
    
    clickMobilephone(){
        this.mobilephone.click()
    }
}

export const smartphoneAndTV = new SmartphoneAndTV()