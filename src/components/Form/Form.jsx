import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "../Button/Button.jsx"

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log('Email', email);
        console.log('Password', password);
    }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />{/* se debe realizar ruta en server */}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                    
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>


        <Link to="/home">
        <Button name={"Entrar"} />
        </Link>
    </div>
  )
}

export default Form