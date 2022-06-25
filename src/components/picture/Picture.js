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
                    <img src={this.props.url} alt={'pokemon'}/>
                    <NavLink to={'/ditto'} className={classes.Picture_module_cont_link}><p>{this.props.title}</p></NavLink>
                </figure>
                {/*<figure className={classes.Picture_module_cont}>*/}
                {/*    <img src={this.props.url}/>*/}
                {/*    <NavLink to={'/bulbasaur'} className={classes.Picture_module_cont_link}><p>Bulbasaur</p></NavLink>*/}
                {/*</figure>*/}
                {/*<figure className={classes.Picture_module_cont}>*/}
                {/*    <img src={this.props.weed}/>*/}
                {/*    <NavLink to={'/weedle'} className={classes.Picture_module_cont_link}><p>Weedle</p></NavLink>*/}
                {/*</figure>*/}
                {/*<figure className={classes.Picture_module_cont}>*/}
                {/*    <img src={this.props.beedrill}/>*/}
                {/*    <NavLink to={'/beedrill'} className={classes.Picture_module_cont_link}><p>Beedrill</p></NavLink>*/}
                {/*</figure>*/}
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