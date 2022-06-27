//Создание Хранилища состояния данных

import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))//Принимаем,и расширяем стор до ассинхронных экшенов и возвращаем сторе
