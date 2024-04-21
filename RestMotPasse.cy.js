describe('Mot de pass oublié', () => {

  // Test cases pour la forget password
  it('a forget password test case', () => {
   cy.visit('https://ecommerce-playground.lambdatest.io/')
   cy.title().should('eq', 'Your Store')
   cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
   cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
   cy.contains("Forgot Your Password?")
   cy.get('input[name="email"]').type("henda0kaabi@gmail.com")
   cy.get('button[type="submit"]').contains('Continue').click()
   cy.contains(' An email with a confirmation link has been sent your email address.')
  
  //Ajoutez autres test cases pour la partie forget password
    
it('test Reset mot de pass' , () => {
  cy.visit('https://ecommerce-playground.lambdatest.io/')
  cy.title().should('eq', 'Your Store')
  cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
  cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
  cy.contains("Forgot Your Password?")
  cy.get('input[name="email"]').type("randomtext")
  cy.get('button[type="submit"]').contains('Continue').click()
  cy.contains('  Warning: The E-Mail Address was not found in our records, please try again!')
         
  })
})
})
