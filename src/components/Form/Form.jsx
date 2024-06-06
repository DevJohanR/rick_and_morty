import React, { useState } from 'react';
import { validate } from './validation';

const Form = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({}); // Inicializado como objeto vacío

  // Función para manejar el cambio en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    // Limpiar el error específico al cambiar el campo
    setErrors({
      ...errors,
      [name]: '', 
    });

    // Loggear los cambios en la consola
    console.log(`Campo actualizado: ${name}, Nuevo valor: ${value}`);
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos del formulario
    const validationErrors = validate(userData);
    setErrors(validationErrors);

    // Si no hay errores, procesar el formulario
    if (Object.keys(validationErrors).length === 0) {
      // Procesar el formulario (ej. enviar los datos)
      console.log('Formulario enviado con éxito', userData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Tu Email Aqui"
          id="email" // Corregido el id
          value={userData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} {/* Mostrar error */}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Tu Contraseña aqui"
          id="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} {/* Mostrar error */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
  