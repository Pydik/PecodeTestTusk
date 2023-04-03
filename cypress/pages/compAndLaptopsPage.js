class CompAndLaptopsPage {
    
   get laptops (){return cy.get('[class="tile-cats__picture"][href="https://rozetka.com.ua/ua/notebooks/c80004/"]')}
   
   clickLaptops(){
    this.laptops.click()
   }
}

export const compAndLaptops = new CompAndLaptopsPage()