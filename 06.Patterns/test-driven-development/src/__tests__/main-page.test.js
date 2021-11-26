//* DENTRO DE main-page-test.js vamos a importar las utilidades de react testing library,
//* el componente que vamos a testear, comenzaremos con nuestra primer prueba

import React from 'react';
import { render, screen } from '@testing-library/react';
//VAMOS A IMPORTAR UN COMPONENTE, AÚN NO LO HEMOS CREADO
import { MainPage } from "../Components/main-page";

 // escope global en nuestro test, para que me haga el render antes de cada uno ( que no se duplique el render )
beforeEach (() => render(<MainPage />)) //hacemos un render del componente

// EL REFACTOR PUEDE SER APLICADO TANTO EN EL CÓDIGO DEL TEST, ASÍ COMO EN EL CÓDIGO
// DE LA IMPLEMENTACIÓN
describe ('Quotes List', () => {
    //nos devuelve un callback
    it("must display 3 quotes", async () => {
    expect(await screen.findAllByRole("listitem")).toHaveLength(3); 
    
    
    //el matcher toBeInTheDocument() no existe en el core de Jest, pero es accesible  a lo que tenemos
    //en src/setupTest.js
    })
  });
  