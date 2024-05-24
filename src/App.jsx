import './App.css';
import Card from './components/Card/Card.jsx';
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
//import SearchBar from './components/SearchBar/SearchBar.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
//import characters, { Rick } from './data.js';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {

      const numericId = Number(id)
      
      const characterExists = characters.some((char) => char.id === numericId);

      if(characterExists) {
         window.alert('¡El personaje ya esta en la lista!')
         return;
      }


      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-riascosjohan333`)
          .then(({ data }) => {
              if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
              } else {
                  window.alert('¡No hay personajes con este ID!');
              }
          })
          .catch((err) => {
              console.error(err); // Corrected from console.err to console.error
          });
  };
  


const onClose = (id) =>{
setCharacters(
   characters.filter((char)=>{
      return char.id !== Number(id)
   })
)
}



   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
         
      </div>
   );
}

export default App;
