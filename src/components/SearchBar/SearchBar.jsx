import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");


   const handleChange = (evento) =>{
   const chartId = evento.target.value;

   setId(chartId)
   }


   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
