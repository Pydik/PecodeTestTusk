import { mainPage } from "../pages/mainPage"
import { compAndLaptops } from "../pages/compAndLaptopsPage"
import { laptops } from "../pages/laptopsPage"
import { smartphoneAndTV } from "../pages/smartphoneAndTVPage"
import { mobilephone } from "../pages/mobilephonePage"


describe('Add items to the basket', () => {
  // Я не розумію цей тест кожен раз має різний результат
  it('passes', () => {
    mainPage.launchApplication()
    cy.url('href').should('contain','https://rozetka.com.ua/ua/')
    mainPage.clickLaptopAndComp()
    compAndLaptops.clickLaptops()
    cy.intercept('POST','https://api-analytics.rozetka.com.ua/bulk').as('addtobasket')
    laptops.clickFirstElementInList()
    cy.wait('@addtobasket',{timeout: 15000});
    cy.visit('https://rozetka.com.ua')
    mainPage.clickSmartphoneAndTV()
    smartphoneAndTV.clickMobilephone()
    cy.intercept('POST','https://api-analytics.rozetka.com.ua/bulk').as('addtobasket')
    mobilephone.clickFirstElementInList()
    cy.wait('@addtobasket',{timeout: 15000});
    mobilephone.clickBusket()

    let inputArray = []
    cy.get('[class="cart-product__price cart-product__price--red"]').each(($el, index) => {
        inputArray[index] = Number(($el.text()).replace(/[^0-9.]/g, ''));
    }).then(() => {
        const sortedArray = [...inputArray].sort((a,b)=>a-b);
        expect(inputArray).to.deep.equal(sortedArray);
    });
  })
})