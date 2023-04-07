class LaptopsPage {
    
    get cbrozetka (){return cy.get('[data-id="Rozetka"]')}
    get cbasus (){return cy.get('[data-id="ASUS"]')}
    get cbacer (){return cy.get('[data-id="Acer"]')}
    get rozetkaLogo (){return cy.get('[alt="Rozetka Logo"]')}
    get firstbuscket (){return cy.get('[data-goods-id="288376303"] .buy-button')}
    get firstElementInList (){return cy.get('[data-goods-id="288376303"] .goods-tile__title')}
    get openDD (){return cy.get('select.select-css')}
    get titleName (){return cy.get('span.goods-tile__title')}
    get allPrice (){return cy.get('span.goods-tile__price-value')} 

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