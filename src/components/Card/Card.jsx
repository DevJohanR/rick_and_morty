import { Link } from "react-router-dom";

export default function Card(props) {
   console.log(props)
   return (
     
      <div>
         <button onClick={()=>props.onClose(id)}>X</button>
<Link to={`/detail/${id}`} > <h2>{props.name} </h2></Link>
        
         <h2>{props.status} </h2>
         <h2>{props.species} </h2>
         <h2>{props.gender} </h2>
         <h2>{props.origin.name} </h2>
         <img src={props.image} alt={props.name} /> 
      </div>
   );
}


/*

n este ejercicio te encargarás de crear la redirección hacia el _detail_ de un personaje. Para esto:

1. Dirígete al componente **`Card`** e importa la etiqueta **Link**.
2. Envuelve el nombre del personaje en esta etiqueta, y que redirija a la ruta **`/detail/:id`**.

> [**NOTA**]: debes pasarle como parámetro el **id** del personaje. personaje para usarlo en el Link.

```js
// Card.js
...
<Link to={`/detail/${id}`} >
  <h3 className="card-name">{name}</h3>
</Link>
...
```

*/
