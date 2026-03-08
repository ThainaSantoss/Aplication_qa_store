// cenario de teste

describe('smoke - comprar na loja', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it("user can buy product", () => {
     cy.get('[data-testid="add-to-cart"]').first().click()
     cy.get('[data-testid="cart-item"]').should('exist')
     cy.get('[data-testid="checkout-button"]').click()

     // form
     cy.get('[data-testid="name-input"]').type('Thaina')
     cy.get('[data-testid="address-input"]').type('Rua Exemplo, 123')
     cy.get('[data-testid="payment-input"]').type("cartao")

     cy.get('[data-testid="confirm-order"]').click()
     cy.get('[data-testid="order-success"]').should('contain', 'Compra finalizada com sucesso!')
    }) 

    it("user can make a purchase with a coupon", () => {
    cy.get('[data-testid="add-to-cart"]').first().click()
    cy.get('[data-testid="cart-item"]').should('exist')
    
    // adicionar um cupom 
    cy.get('[data-testid="coupon-input"]').type('DESCONTO10')
    // confirmar cupom 
    cy.get('[data-testid="apply-coupon"]').click()
    // validar sucesso
    cy.get('[data-testid="coupon-status"]').should('contain', 'Cupom aplicado!')
    
     cy.get('[data-testid="checkout-button"]').click()
     
     cy.get('[data-testid="name-input"]').type('Thaina')
     cy.get('[data-testid="address-input"]').type('Rua Exemplo, 123')
     cy.get('[data-testid="payment-input"]').type("cartao")

     cy.get('[data-testid="confirm-order"]').click()
     cy.get('[data-testid="order-success"]').should('contain', 'Compra finalizada com sucesso!')

    })

    it("user sees invalid coupon message", () => {
    cy.get('[data-testid="add-to-cart"]').first().click()
    cy.get('[data-testid="cart-item"]').should('exist')
    
    // adicionar cupom invalido 
    cy.get('[data-testid="coupon-input"]').type('DESCONTO90')
    // confirmar cupom 
    cy.get('[data-testid="apply-coupon"]').click()
    // cupom invalido
    cy.get('[data-testid="coupon-status"]').should('contain', 'Cupom inválido!')
    
    cy.get('[data-testid="checkout-button"]').click()

    cy.get('[data-testid="name-input"]').type('Thaina')
    cy.get('[data-testid="address-input"]').type('Rua Exemplo, 123')
    cy.get('[data-testid="payment-input"]').type("cartao")

    cy.get('[data-testid="confirm-order"]').click()
    cy.get('[data-testid="order-success"]').should('contain', 'Compra finalizada com sucesso!')

    

    })

})


 
// cy.get('product-item')
      //  cy.contains('add-to-cart').click()
       // cy.find('checkout-form').check()
      //  cy.first('confirm-order')

// cy.visit()

//cy.get()

//cy.click()

//cy.type()

//it('usuário consegue executar o fluxo', () => {
  // ACT
  // encontrar elemento
  // clicar
  // preencher campo
  // clicar novamente

  // ASSERT
  // validar resultado esperado
//})

