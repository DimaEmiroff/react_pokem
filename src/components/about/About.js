import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from './About.module.scss'


const About = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <h1>Contacts!</h1>
                        <NavLink to= 'about' className={classes.About_About_module__pgyzx}>CONTACTS</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default About;