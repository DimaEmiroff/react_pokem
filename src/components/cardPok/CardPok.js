import React, {useEffect} from 'react';
import './CardPok.module.scss'
import classes from "./CardPok.module.scss";
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCurrentPokemonActions} from "../state/pokemons/actions";


const CardPok = () => {
    const dispatch = useDispatch();
    const currentPokemon = useSelector(state => state.pokemonReducer.currentPokemon);
    const pokemon = useSelector(state => state.pokemonReducer.pok);
    const pokemonLocation = useLocation().pathname.split('/')[1];
    console.log(currentPokemon);

    useEffect(() => {

        pokemon.forEach((item) => {
            if (item.name === pokemonLocation){
                console.log(item);
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
                    {/*{pokemon.map((item,i) =>{*/}
                    {/*    return (*/}
                    {/*        <p key={i}><span>{item.name}: </span> {item.base_stat}</p>*/}
                    {/*    )*/}
                    {/*})}*/}

                    <p> </p>
                    {/*<p>attack:45</p>*/}
                    {/*<p>diffence:49</p>*/}
                    {/*<p>special attack:65</p>*/}
                    {/*<p>special diffence:65</p>*/}
                    {/*<p>speed:45</p>*/}
                </div>

            </div>

        </div>
    );
};

export default CardPok;