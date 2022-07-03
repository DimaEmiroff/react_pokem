import classes from "./Picture.module.scss";
import React, {Component, useState} from 'react';
import {NavLink} from "react-router-dom";


const Picture = (props) => {
    return (
        <div className={classes.Picture_module}>
            <figure className={classes.Picture_module_cont}>
                <img src={props.url} alt={'pokemon'} className={classes.Picture_module_cont_img}/>
                <NavLink to={`/${props.title}`} className={classes.Picture_module_cont_link} onClick={() => props.addCurrentPokemon({title: props.title, imageUrl: props.url, stats: props.stats})}><p>{props.title}</p></NavLink>
            </figure>
        </div>
    );
};
export default Picture;
// export default class Picture extends Component {
//     state = {
//         props: ''
//     }
//     render() {
//         return (
//             <div className={classes.Picture_module}>
//                 <figure className={classes.Picture_module_cont}>
//                     <img src={this.props.url} alt={'pokemon'} className={classes.Picture_module_cont_img}/>
//                     <NavLink to={`/${this.props.title}`} className={classes.Picture_module_cont_link} onClick={() => this.props.addCurrentPokemon({title: this.props.title, imageUrl: this.props.url, stats: this.props.stats})}><p>{this.props.title}</p></NavLink>
//                 </figure>
//             </div>
//         );
//     }
// };
