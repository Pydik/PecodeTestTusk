import { mainPage } from "../pages/mainPage"

describe('Search the item', () => {
  
  it('passes', () => {
    mainPage.launchApplication()
    cy.url('href').should('contain','https://rozetka.com.ua/ua/')
    mainPage.fillSearchField('Ноутбуки')
    cy.get('span.goods-tile__title').each(($el) => {
      let n = $el.text()
      expect(n).to.contain('Ноутбук')

    })

  })
})