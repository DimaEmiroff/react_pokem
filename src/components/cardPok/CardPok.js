import React, {useEffect} from 'react';
import './CardPok.module.scss'
import classes from "./CardPok.module.scss";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCurrentPokemonActions} from "../state/pokemons/actions";


const CardPok = () => {
    const dispatch = useDispatch();
    const currentPokemon = useSelector(state => state.pokemonReducer.currentPokemon);
    const pokemon = useSelector(state => state.pokemonReducer.pok);//вытаскивам данные из стэйта
    const pokemonLocation = useLocation().pathname.split('/')[1];//Чистим путь до элемента

    useEffect(() => {
        pokemon.forEach((item) => {
            if (item.name === pokemonLocation){
                dispatch(addCurrentPokemonActions({title: item.name, imageUrl: item.sprites.front_default, stats: item.stats}))
            }
        })
    },[pokemon])
    return (
        <div className={classes.cardPok}>
            <div className={classes.cardPok_fl}>
                <img src={currentPokemon.imageUrl} alt={'pokemon'} className={classes.cardPok_img}/>
                <NavLink to={'/'} className={classes.cardPok_fl_btn}>&lt; Back</NavLink>
            </div>
            <div className={classes.cardPok_text}>
                <h1>{currentPokemon.title}</h1>
                <h2>STATS</h2>
                <div className={classes.cardPok_parametr}>
                    {currentPokemon.stats?.map((item,i) =>{
                        return (
                            <p key={i}><span>{item.stat.name}: </span> {item.base_stat}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CardPok;