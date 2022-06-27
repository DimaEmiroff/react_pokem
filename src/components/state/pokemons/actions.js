// Изменение состояния

import {
    ADD_POKEMON_LIST,
    ADD_POKEMON,
    REQUEST_POKEMON_FILED,
    REQUEST_POKEMON_LOADING,
    REQUEST_POKEMON_SUCCESS,
    ADD_CURRENT_POKEMON,
    REQUEST_POKEMON_ITEM_LOADING,
    REQUEST_POKEMON_ITEM_SUCCESS,
    REQUEST_POKEMON_ITEM_FILED,
    ADD_POKEMON_ITEM
} from "./types";


//Запрашиваем данные с сервера
export const fetchPokemonListApi = () => {
        return dispatch => {//вызываем диспатч для обновления состояния
            dispatch({type: REQUEST_POKEMON_LOADING})//Отправляет экшен.
         fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`)
            .then(res => res.json())
            .then(res => {
                dispatch({type: REQUEST_POKEMON_SUCCESS})
                dispatch({type: ADD_POKEMON_LIST, payload:res.results})
                dispatch(fetchPokemonApi(res.results))
                console.log(res)
            })
             .catch(() => dispatch({type: REQUEST_POKEMON_FILED}))
    }
};

// выводим список покемонов и записываем в массив
export const fetchPokemonApi = (list) => {
    return dispatch => {
        dispatch({type: REQUEST_POKEMON_LOADING})
        const fetchList = list.map(item => fetch(item))
            Promise.all(fetchList)
                .then(value => Promise.all(value.map(elem => elem.json())))
                .then(value => {
                    dispatch({type: REQUEST_POKEMON_SUCCESS})
                    dispatch({type:ADD_POKEMON, payload: value})
                })
                .catch(() => dispatch({type: REQUEST_POKEMON_FILED}))
        }
    }
//Изменяем значение в строке поиска на url покемона
export const addCurrentPokemonActions = (currentPokemon) => {
        return {type:ADD_CURRENT_POKEMON, payload: currentPokemon}
    }

// Поиск данных
export const fetchPokemonItemApi = (name) => {
    return dispatch => {//вызываем диспатч для обновления состояния
        dispatch({type: REQUEST_POKEMON_ITEM_LOADING})//Отправляет экшен.
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then(res => {
                dispatch({type: REQUEST_POKEMON_ITEM_SUCCESS});
                dispatch({type: ADD_POKEMON_ITEM, payload: res});
            })
            .catch(() => dispatch({type: REQUEST_POKEMON_ITEM_FILED}))
    }
}
