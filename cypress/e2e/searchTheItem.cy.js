import { mainPage } from "../pages/mainPage"
import { laptops } from "../pages/laptopsPage"

describe('Search the item', () => {
  
  it('passes', () => {
    mainPage.launchApplication()
    cy.url('href').should('contain','https://rozetka.com.ua/ua/')
    mainPage.fillSearchField('Ноутбуки')
    laptops.titleName.each(($el) => {
      let n = $el.text()
      expect(n).to.contain('Ноутбук')

    })

  })
})