import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

import './assets/styles/global.css';

import PokemonInterface from './assets/apis/pokemonInterface';
import api from './assets/apis/api';

import PageButtons from './assets/pages/pageButtons';
import PageHeader from './assets/pages/pageHeader';


let pokem: PokemonInterface[]

function App() {

  const [pokemons, setPokemons] = useState();
  

  useEffect(() => {

    api.get('/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {

      setPokemons(res.data.pokemon)
      pokem = res.data.pokemon

    })

  }, [pokemons])

  return (

    <div id="app">

      <PageHeader />

      <PageButtons />

      <div className="pokemons-card">

        {pokem?.map((p) => (

          <Card.Body>

            <Card.Img src={p.img} />
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>Type: {p.type}</Card.Text>
            <Card.Text>Height: {p.height}</Card.Text>
            <Card.Text>Weight: {p.weight}</Card.Text>

          </Card.Body>

        ))}

      </div>

    </div >

  );

}

export default App;
