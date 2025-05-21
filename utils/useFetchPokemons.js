import React, { useState, useEffect } from "react";

const url = "https://pokeapi.co/api/v2/"
const options = "pokemon?limit=1000&offset=0";
const urlPath = `${url}${options}`
//const urlPath = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"


export const useFetchPokemons = () => {
    const [pokemonsList, setPokemonsList] = useState([])
    const [pokemonsFilttering, setPokemonsFilttering] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            try {
                const PokemonIdsResponse = await fetch(urlPath);
                
                // Verifica si la respuesta es exitosa
                if (!PokemonIdsResponse.ok) {
                    throw new Error(`HTTP error! status: ${PokemonIdsResponse.status}`);
                }
                
                const pokemonBody = await PokemonIdsResponse.json();
        
                const pokemons = await Promise.all(
                    pokemonBody.results.map(async (pokemon) => {
                        const pDetails = await fetch(pokemon.url);
                        return await pDetails.json();
                    })
                );
                setPokemonsList(pokemons);
                setPokemonsFilttering(pokemons);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                console.log("Error fetching data: ", error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchFirstGenPokemons()
    }, [])

    return { pokemonsList, pokemonsFilttering, setPokemonsList, isLoading, isError }

}
