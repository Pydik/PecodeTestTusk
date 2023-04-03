import { mainPage } from "../pages/mainPage"
import { compAndLaptops } from "../pages/compAndLaptopsPage"
import { laptops } from "../pages/laptopsPage"

describe('Verify if the price filter working correctly for the following marketplaces', () => {
  
  it('passes', () => {
    mainPage.launchApplication()
    cy.url('href').should('contain','https://rozetka.com.ua/ua/')
    mainPage.clickLaptopAndComp()
    compAndLaptops.clickLaptops()
    laptops.clickCBrozetka()
    laptops.clickCBAsus()
    laptops.clickCBAcer()
    laptops.clickDDMenu()
    cy.wait(4000)

    let inputArray = []
    cy.get('span.goods-tile__price-value').each(($el, index) => {
        inputArray[index] = Number(($el.text()).replace(/[^0-9.]/g, ''));
    }).then(() => {
        const sortedArray = [...inputArray].sort((a,b)=>a-b);
        expect(inputArray).to.deep.equal(sortedArray);
    });

  })
})