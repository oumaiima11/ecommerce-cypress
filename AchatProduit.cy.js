describe('Acheter un produit ', () => {

  // Test cases pour l'achat d'un produits avec une nouvelle adresse
  it('Acheter un produit au panier', () => {
    cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
      cy.get('button[type="submit"]').contains("Search").click({force:true})   
      cy.contains("Search - HTC Touch HD")
      cy.get('#entry_212469 > .row > :nth-child(1)').click()
      cy.get('#entry_216843 > .text').click()
      cy.wait(15000)
      cy.get('input[type="radio"]').check('new',{force:true})
      cy.get('#input-payment-firstname').type('oumaima')
      cy.get('#input-payment-lastname').type('ghanmi')
      cy.get('#input-payment-company').type('elife')
      cy.get('#input-payment-address-1').type('Beja Nord Qsar bardo')
      cy.get('#input-payment-city').type('Beja')
      cy.get('#input-payment-postcode').type('9000')
      cy.get('#input-payment-country').select('Tunisia')
      cy.get('#input-payment-zone').select('Beja')
      cy.get(':nth-child(6) > .custom-control-label').click()
      cy.get('#button-save').click()
      cy.get('#button-confirm').click()
      cy.contains("Your order has been placed!")
    })
    
    //Test cases pour l'achat d'un produits avec une adresse existante
    
       it('Acheter un produit au panier', () => {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
      cy.get('button[type="submit"]').contains("Search").click({force:true})   
      cy.contains("Search - HTC Touch HD")
      cy.get('#entry_212469 > .row > :nth-child(1)').click()
      cy.get('#entry_216843 > .text').click()
      cy.get(':nth-child(6) > .custom-control-label').click()
      cy.get('#button-save').click()
      cy.get('#button-confirm').click()
      cy.contains("Your order has been placed!")
       
    
  })
})