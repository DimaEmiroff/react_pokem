import React from 'react';
import Input from "../input/Input";
import Picture from "../picture/Picture";
import classes from "./Home.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addCurrentPokemonActions, fetchPokemonApi, fetchPokemonItemApi} from "../state/pokemons/actions";

//----Home----
const HomePage = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemonReducer.pok)
    const pokemonList = useSelector(state => state.pokemonReducer.pokemonList)
    const addCurrentPokemon = (currentPokemon) => {
        dispatch(addCurrentPokemonActions(currentPokemon))
    }
    const searchPokemon = (pokemonName) => {
        if (pokemonName) {
            dispatch(fetchPokemonItemApi(pokemonName))
        }else {
            dispatch(fetchPokemonApi(pokemonList))
        }
    }
    return (
        <div className={classes.Home_module}>
            <Input onClick={searchPokemon}/>
            <div className={classes.Home_module_img}>
            {pokemon.map((item, i )=> {
                return (
                    <Picture
                        key= {i}
                        title = {item.name}
                        url={item.sprites.front_default}
                        stats={item.stats}
                        addCurrentPokemon={addCurrentPokemon}
                    />
                )
            })}
            </div>
        </div>
    );
};

export default HomePage;
