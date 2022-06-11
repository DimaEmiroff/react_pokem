import React from 'react';
import classes from "./Header.module.scss";
import icon from './image/icon.png';

const Header = () => {
    return (
        <div className={classes.Header_module}>
            <img src={icon} className={classes.Header_module_icon}/>
        </div>
    );
};

export default Header;