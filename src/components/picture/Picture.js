import classes from "./Picture.module.scss";
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export class Picture extends Component {
    state = {
        props: ''
    }
    render() {
        return (
            <div className={classes.Picture_module}>
                <figure className={classes.Picture_module_cont}>
                    <img src={this.props.url} alt={'pokemon'} className={classes.Picture_module_cont_img}/>
                    <NavLink to={`/${this.props.title}`} className={classes.Picture_module_cont_link} onClick={() => this.props.addCurrentPokemon({title: this.props.title, imageUrl: this.props.url, stats: this.props.stats})}><p>{this.props.title}</p></NavLink>
                </figure>
            </div>
        );
    }
}

// const Picture = (props) => {
//     return (
//         <div className={classes.Picture_module}>
//             <img src={props.ditto}/>
//             <img src={props.bulb}/>
//             <img src={props.beedrill}/>
//             <img src={props.weed}/>
//         </div>
//     );
// };

export default Picture;