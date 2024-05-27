import './App.css';
import Card from './components/Card/Card.jsx';
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
//import SearchBar from './components/SearchBar/SearchBar.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
//import characters, { Rick } from './data.js';
import Form from './components/Form/Form.jsx';
import { useLocation } from 'react-router-dom';

function App() {


   const [characters, setCharacters] = useState([]);
   const location = useLocation();

   const onSearch = (id) => {

      const numericId = Number(id)

      const characterExists = characters.some((char) => char.id === numericId);

      if (characterExists) {
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



   const onRandomSearch = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId);
   };



   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }



   return (
      <div className='App'>
          {/* Renderiza Nav solo si no estamos en la ruta de inicio */}
          {location.pathname !== '/' && <Nav onSearch={onSearch} onRandomSearch={onRandomSearch} />}

         <Routes>
         <Route path='/' element={<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
        

      </div>
   );
}

export default App;
