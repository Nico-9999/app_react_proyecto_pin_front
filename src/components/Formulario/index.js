import React, { useState } from 'react';
import axios from 'axios';




const Formulario = () => {
    const [persona, setPersona] = useState({
      nombre: '',
      apellido: '',
      mail: '',
      mensaje: '',
    });
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersona((prevPersona) => ({
          ...prevPersona,
          [name]: value,
        }));
        console.log(persona)
      };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/api/agregar-persona', persona);
          console.log(persona)
          console.log('Respuesta del backend:', response.data);

        } catch (error) {
          console.error('Error al enviar datos al backend:', error);
        };
        alert(`Hola, ${persona.nombre} tu consulta se ha envíado correctamente. A la brevedad estaremos en contacto.`);

    };
  
  
    return (
    <div className="form-container">
      <form id="form" className='form' onSubmit={handleSubmit}>
        <h2 className="contact">Contactanos</h2>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" placeholder="Nombre" name="nombre" value={persona.nombre} onChange={handleChange} className="input"/>
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" placeholder="Apellido" name="apellido" value={persona.apellido} onChange={handleChange} className="input"/>
        </div>
        <div className="form-group">
          <label htmlFor="mail">Correo Electrónico:</label>
          <input type="email" id="mail" placeholder="Correo Electrónico" name="mail" value={persona.mail} onChange={handleChange} className="input"/>
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" className="input" placeholder="Escribe tu mensaje aquí" value={persona.mensaje} onChange={handleChange} />
        </div>
        <button className="btnSubmit" type="submit">Enviar</button>
      </form>

      <div className="img-container-2">
        <img src="./gato-contacto.png" alt="gato con telefono" className="img-cat"/>
      </div>
    </div>
    );
  }
export default Formulario;
