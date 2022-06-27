import React from 'react';
import classes from "./Navigation.module.scss";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
      <nav>
          <ul className={classes.nav_module}>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/about'}>About</NavLink>
              <NavLink to={'/contacts'}>Contacts</NavLink>
          </ul>
      </nav>

    );
};

export default Navigation;