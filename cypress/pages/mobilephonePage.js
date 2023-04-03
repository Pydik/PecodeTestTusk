class Mobilephone {
    
   get firstElementInList (){return cy.get('[data-goods-id="340280239"] [class="toOrder ng-star-inserted"]')}
   get busket (){return cy.get('[href="#icon-header-basket"]')} 

    clickFirstElementInList(){
        this.firstElementInList.click()
    }

    clickBusket(){
        this.busket.click({force: true})
    }
}

export const mobilephone = new Mobilephone()