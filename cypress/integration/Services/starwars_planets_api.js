describe('Validar dados do planeta do universo Star Wars', () => {
    var result
    
    it('Verificando o Header', () => {
       result = cy.request('https://swapi.co/api/planets/1/')
      
       result.its('headers')
             .its('content-type')
             .should('include', 'application/json')
    })

    it('Verificando o response code', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('status')
              .should('equal',200);
     })

     it('Validando o nome do planeta', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('name')
            .should('include', 'Tatooine');
     })

     it('Validando periodo da rotação', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('rotation_period')
            .should('include', '23');
     })

     it('Validando periodo da órbita', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('orbital_period')
            .should('include', '304');
     })

     it('Validando diametro do planeta', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('diameter')
            .should('include', '10465');
     })

     it('Clima planetario', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('climate')
            .should('include', 'arid');
     })

     it('Gravidade planetaria', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('gravity')
            .should('include', '1 standard');
     })


     it('Tipo de terreno', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('terrain')
            .should('include', 'desert');
     })

     it('Validando quantidade de superficie com água', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('surface_water')
            .should('include', '1');
     })

     it('Validando dados de População', () => {
        result = cy.request('https://swapi.co/api/planets/1/')
       
        result.its('body')
            .its('population')
            .should('include', '200000');
     })

}) 
