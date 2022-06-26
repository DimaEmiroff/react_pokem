import React, {useEffect} from "react";
import './App.module.scss';
import classes from "./App.module.scss";
import HomePage from "./components/homePage/HomePage";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import CardPok from "./components/cardPok/CardPok";
import Navigation from "./components/navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonApi, fetchPokemonListApi} from "./components/state/pokemons/actions";


const App = ()  => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonReducer.pokemonList)
    const pokemonName= useSelector(state => state.pokemonReducer.currentPokemon.title)
    useEffect(() => {
        dispatch(fetchPokemonListApi())
    }, [])
    useEffect(() => {
        dispatch(fetchPokemonApi(pokemonList))
    }, [pokemonList])
  return (
    <div className={classes.App_module}>
      <Header/>
        <Navigation/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/:pokemonName'} element={<CardPok/>}/>

            </Routes>
    </div>
  );
}

export default App;
