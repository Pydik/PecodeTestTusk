class LaptopsPage {
    
    get cbrozetka (){return cy.get('[data-id="Rozetka"]')}
    get cbasus (){return cy.get('[data-id="ASUS"]')}
    get cbacer (){return cy.get('[data-id="Acer"]')}
    get rozetkaLogo (){return cy.get('[alt="Rozetka Logo"]')}
    get firstbuscket (){return cy.get('[data-goods-id="288376303"] .buy-button ')}
    get firstElementInList (){return cy.get('[data-goods-id="288376303"] [class="goods-tile__heading ng-star-inserted"]')}
    get openDD (){return cy.get('[class="select-css ng-untouched ng-pristine ng-valid ng-star-inserted"]')}

    clickCBrozetka(){
        this.cbrozetka.click()
    }

    clickCBAsus(){
        this.cbasus.click()
    }

    clickCBAcer(){
        this.cbacer.click()
    }

    clickFirstElementInList(){
        this.firstbuscket.click()
    }

    clickRozetkaLogo(){
        this.rozetkaLogo.click()
    }

    clickDDMenu(){
        this.openDD.select(1)
    }
 }
 
 export const laptops = new LaptopsPage()