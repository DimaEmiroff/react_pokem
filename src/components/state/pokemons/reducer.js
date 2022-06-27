//Здесь реализовывается логика в соответствие с которой будет происходить обновление полей store.


import {ADD_POKEMON_LIST, ADD_POKEMON, ADD_CURRENT_POKEMON} from "./types";

const initialState = {//Объект начального состояния хранилища
    pokemonList: [],
    pok: [],
    currentPokemon: {}
}
/*это чистая функция, которая вычисляет следующее состояние дерева на основании его предыдущего состояния и применяемого действия.*/
//Функция принимает значение текущего состояния и обьект события (action)
export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMON_LIST:// тип события (действие)
            return {...state, pokemonList: action.payload.map(item => item.url)}//значение (обработка) события
        case ADD_POKEMON:// Добавить покемонов
            return {...state, pok: action.payload}
        case ADD_CURRENT_POKEMON://Вывод параметров покемона
            return {...state, currentPokemon: action.payload}
        default://возврат текущего состояния по умолчанию
                return state
    }
}

// export const pokemonReducer =  (state= initialState, action) => {
//     if (action.type === ADD_POKEMON_LIST) {
//         return {...state, pokemonList: action.payload.map(item => item.url)}
//     }else if (action.type === ADD_POKEMON) {
//         return {...state, pok: action.payload}
//     }else if (action.type === ADD_CURRENT_POKEMON) {
//         return {...state, currentPokemon: action.payload}
//     }else {
//         return state
//     }
// }
