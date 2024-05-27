import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-riascosjohan333`).then(
      ({ data }) => {
        console.log('Datos del personaje:', data);
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    ).catch(error => {
      console.error('Error al obtener el personaje:', error);
    });
    return () => setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>Detalle del Personaje</h1>
      {character.name ? <h2>{character.name}</h2> : <p>No disponible</p>}
      {character.image ? <img src={character.image} alt={character.name} /> : <p>Imagen no disponible</p>}
      {character.status ? <p><strong>Status:</strong> {character.status}</p> : <p>Status no disponible</p>}
      {character.species ? <p><strong>Species:</strong> {character.species}</p> : <p>Species no disponible</p>}
      {character.gender ? <p><strong>Gender:</strong> {character.gender}</p> : <p>Gender no disponible</p>}
      {character.origin?.name ? <p><strong>Origin:</strong> {character.origin.name}</p> : <p>Origin no disponible</p>}
      {character.location?.name ? <p><strong>Location:</strong> {character.location.name}</p> : <p>Location no disponible</p>}
    </div>
  );
};

export default Detail;
