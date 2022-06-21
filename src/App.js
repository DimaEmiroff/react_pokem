import React from "react";
import './App.module.scss';
import classes from "./App.module.scss";
import HomePage from "./components/homePage/HomePage";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import CardPok from "./components/cardPok/CardPok";
import Navigation from "./components/navigation/Navigation";


const App = ()  => {
  return (
    <div className={classes.App_module}>
      <Header/>
        <Navigation/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/bulbasaur'} element={<CardPok/>}/>

            </Routes>
    </div>
  );
}

export default App;
