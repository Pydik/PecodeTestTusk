import { mainPage } from "../pages/mainPage"


describe('login with valid credentials', () => {
  
  it('login with valid credentials', () => {
    mainPage.launchApplication()
    cy.url('href').should('contain','https://rozetka.com.ua/ua/')
    mainPage.login()
    mainPage.errorMesseg.should('have.text','Введено невірну адресу ел. пошти або номер телефону')
  })
})