// validation.js

export const validate = (userData) => {
    let errors = {};
  
    // Validación de Email
    if (!userData.email) {
      errors.email = 'El nombre de usuario no puede estar vacío';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = 'El nombre de usuario tiene que ser un email válido';
    } else if (userData.email.length > 35) {
      errors.email = 'El nombre de usuario no puede tener más de 35 caracteres';
    }
  
    // Validación de Password
    if (!userData.password) {
      errors.password = 'La contraseña no puede estar vacía';
    } else if (!/\d/.test(userData.password)) {
      errors.password = 'La contraseña tiene que tener al menos un número';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres';
    }
  
    return errors;
  };
  