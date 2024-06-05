import React, {useState} from 'react'

const Form = () => {

const [userData, setUserData] = useState({email: '', password: ''});
const [errors, setErrors] = useState("")

// Funcion para manejar el cambio en los inputs
const handleInputChange = (e)=>{
const { name, value } = e.target;
setUserData({
  ...userData,
  [name]:value,
});

// Loggear los cambios en la consola
console.log(`Campo actualizado: ${name}, Nuevo valor: ${value}`);
};


  return (
    <div>
        <form action="">
            
            <label htmlFor="email">Email</label>
            <input 
            type="text"
            name="email"
            placeholder='Tu Email Aqui'
            id="password"
            value={userData.email}
            onChange={handleInputChange}
             />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            placeholder='Tu Contraseña aqui'
            id='password'
            value={userData.password}
            onChange={handleInputChange}
             />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form