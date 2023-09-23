describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://pucpr-tecdevweb-atp2.netlify.app')

  
    cy.get('[type="email"]').type('fake@email.com')
    cy.get('[type="password"]').type('fakepassword')
  })
})

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
