class SmartphoneAndTV {
    
    get mobilephone (){return cy.get('a.tile-cats__picture[href*="c80003"]')}
    
    clickMobilephone(){
        this.mobilephone.click()
    }
}

export const smartphoneAndTV = new SmartphoneAndTV()