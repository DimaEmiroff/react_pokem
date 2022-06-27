import React from 'react';
import Input from "../input/Input";
import Picture from "../picture/Picture";
import classes from "./Home.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addCurrentPokemonActions, fetchPokemonItemApi} from "../state/pokemons/actions";

const HomePage = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemonReducer.pok)
    const addCurrentPokemon = (currentPokemon) => {
        dispatch(addCurrentPokemonActions(currentPokemon))
    }

    const searchPokemon = () => {
      dispatch(fetchPokemonItemApi())
    }

    return (
        <div className={classes.Home_module}>
            <Input onClick={searchPokemon}/>
            <div className={classes.Home_module_img}>
            {pokemon.map((item, i )=> {
                return (
                    <Picture
                        key= {i} title = {item.name}
                        url={item.sprites.front_default}
                        addCurrentPokemon={addCurrentPokemon}
                        stats={item.stat}
                    />
                )
            })}
            </div>
        </div>
    );
};

export default HomePage;
