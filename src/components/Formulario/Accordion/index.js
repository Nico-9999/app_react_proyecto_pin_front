// Accordions.js

import React from 'react';
import { Accordion } from 'react-bootstrap';
import './accordionstyles.css'; 

function Accordions() {
  return (
    <Accordion defaultActiveKey="0" id="info" className="custom-accordion">
      <Accordion.Item eventKey="0" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Nuestra idea</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          
          {
          "En Gourmet Gatuno, nos apasiona brindar lo mejor a los miembros más queridos de tu familia: tus adorables felinos. Somos amantes de los gatos y entendemos que ellos merecen la más alta calidad en su alimentación. Nuestra historia comenzó con el deseo de proporcionar opciones alimenticias exquisitas y saludables para nuestros propios gatos. Nos dimos cuenta de que, al igual que nosotros, ellos disfrutan de sabores auténticos y nutritivos que elevan su experiencia culinaria."
        };
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="custom-accordion-header">Nuestro compromiso con tu michi</Accordion.Header>
        <Accordion.Body className="custom-accordion-body">
          {
                   "Nos esforzamos por ofrecer productos de alta calidad que satisfagan las necesidades nutricionales específicas de los gatos. Colaboramos con expertos en nutrición felina para garantizar que cada bocado esté diseñado pensando en la salud y el bienestar de tu felino favorito. Nuestro compromiso no se detiene solo en la calidad del producto; también estamos dedicados a la sostenibilidad y la responsabilidad social. Trabajamos con proveedores que comparten nuestros valores éticos y nos esforzamos por minimizar nuestro impacto en el medio ambiente."
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export { Accordions };
