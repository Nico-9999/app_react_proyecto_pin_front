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
        alert(`Hola, ${persona.nombre} Bienvenido.`);

    };
  
  
    return (
      <form id="form" className='form' onSubmit={handleSubmit}>
        <label className="label">
          Nombre:
          <input type="text" placeholder="Nombre" name="nombre" value={persona.nombre} onChange={handleChange} />
        </label>
        <br />
        <label className="label">
          Apellido:
          <input type="text" placeholder="Apellido" name="apellido" value={persona.apellido} onChange={handleChange} />
        </label >
        <br />
        <label className="label">
          Correo Electrónico:
          <input type="email" placeholder="Correo Electrónico" name="mail" value={persona.mail} onChange={handleChange} />
        </label>
        <br />
        <label className="label">
          Mensaje :
          <textarea name="mensaje" placeholder="Escribe tu mensaje aquí" value={persona.mensaje} onChange={handleChange} />
        </label>
        <br />
        <button className="btnSubmit" type="submit">Enviar</button>
      </form>
    );
  }
export default Formulario;
