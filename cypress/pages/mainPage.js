class MainPage {
    
    get laptopAndComp(){return cy.get('[href="https://rozetka.com.ua/ua/computers-notebooks/c80253/"][class="menu-categories__link"]')}
    get smartphoneAndTV(){return cy.get('[href="https://rozetka.com.ua/ua/telefony-tv-i-ehlektronika/c4627949/"][class="menu-categories__link"]')}
    get searchField(){return cy.get('[name="search"]')}
    get findBtn(){return cy.get('button.button_color_green')}
    get headerBtn(){return cy.get('[class="header__button ng-tns-c65-1"]')}
    get loginBtn(){return cy.xpath('//button[contains(text(),"Вхід")]')}
    get emailField(){return cy.get('#auth_email')}
    get passwordField(){return cy.get('#auth_pass')}
    get logBtn(){return cy.get('button.auth-modal__submit')}
    get errorMessege(){return cy.get('p.error-message')}

    launchApplication() {
        cy.visit('https://rozetka.com.ua/ua/')
    }
        
    clickLaptopAndComp() {
        this.laptopAndComp.click({force: true})
    }
    
    clickSmartphoneAndTV(){
        this.smartphoneAndTV.click()
    }

    fillSearchField(String){
        this.searchField.click()
        this.searchField.type(String)
        this.findBtn.click()
    }

    login(){
        this.headerBtn.click()
        this.loginBtn.click()
        this.emailField.type(Cypress.env('superuser'));
        this.passwordField.type(Cypress.env('password'));
        this.logBtn.click()
    }
    
}

export const mainPage = new MainPage()