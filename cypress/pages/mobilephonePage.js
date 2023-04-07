class Mobilephone {
    
   get firstElementInList (){return cy.get('[data-goods-id="340280235"] .buy-button')}
   get busket (){return cy.get('[href="#icon-header-basket"]')} 
   get allPricesInBusket (){return cy.get('[class="cart-product__price cart-product__price--red"]')}

    clickFirstElementInList(){
        this.firstElementInList.click()
    }

    clickBusket(){
        this.busket.click({force: true})
    }
}

export const mobilephone = new Mobilephone()