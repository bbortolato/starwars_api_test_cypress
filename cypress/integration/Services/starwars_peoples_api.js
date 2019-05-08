describe('Validar Pessoas do Star Wars', () => {
    var result
    
    it('Verificando o Header', () => {
       result = cy.request('https://swapi.co/api/people/1/')
      
       result.its('headers')
             .its('content-type')
             .should('include', 'application/json')
        
    })

    it('Verificando o response code', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('status')
              .should('equal',200);
     })

     it('Verificando o nome retornado', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('name')
            .should('include', 'Luke Skywalker');
     })

     it('Verificando a altura da pessoa', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('height')
            .should('include', '172');
     })

     it('Verificando o peso da pessoa', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('mass')
            .should('include', '77');
     })

     it('Verificando a cor do cabelo', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('hair_color')
            .should('include', 'blond');
     })

     it('Verificando a cor corporal', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('skin_color')
            .should('include', 'fair');
     })

     it('Verificando a cor dos olhos', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('eye_color')
            .should('include', 'blue');
     })


     it('Verificando a data de nascimento', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('birth_year')
            .should('include', '19BBY');
     })

     it('Verificando o genero da pessoa', () => {
        result = cy.request('https://swapi.co/api/people/1/')
       
        result.its('body')
            .its('gender')
            .should('include', 'male');
     })

}) 
