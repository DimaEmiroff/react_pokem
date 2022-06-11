import React from "react";
import './App.module.scss';
import classes from "./App.module.scss";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Picture from "./components/picture/Picture";
import ditto from '../src/components/picture/image/ditto.png';
import bulb from '../src/components/picture/image/bulbusaur.png';
import bee from '../src/components/picture/image/beedrill.png';
import weed from '../src/components/picture/image/weedle.png';

function App() {
  return (
    <div className={classes.App_module}>
        <Header/>
        <Input/>
        <Picture
            ditto = {ditto}
            bulb = {bulb}
            beedrill = {bee}
            weed = {weed}
        />
    </div>
  );
}

export default App;
