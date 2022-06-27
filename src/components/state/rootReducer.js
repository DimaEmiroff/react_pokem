//Следит за состоянием объекта и объединяет состояния

import {pokemonReducer} from "./pokemons/reducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers ({ //собирает результат в единый объект состояния
  pokemonReducer: pokemonReducer //отдельные функции, которые управляют независимыми частями
})



