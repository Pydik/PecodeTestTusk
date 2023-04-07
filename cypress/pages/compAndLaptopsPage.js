class CompAndLaptopsPage {
    
   get laptops (){return cy.get('a.tile-cats__picture[href*="c80004"]')}
   
   clickLaptops(){
    this.laptops.click()
   }
}

export const compAndLaptops = new CompAndLaptopsPage()