import { useState } from "react";
import Button from "../Button/Button";
export default function SearchBar(props) {

   const [id, setId] = useState("");


   const handleChange = (evento) =>{
   const chartId = evento.target.value;

   setId(chartId)
   }


   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <Button name={"Agregar"} onClick={()=>props.onSearch(id)} />

      </div>
   );
}
