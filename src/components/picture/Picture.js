// import React from 'react';
import classes from "./Picture.module.scss";

import React, {Component} from 'react';

export class Picture extends Component {
    state = {
        props: ''
    }
    render() {
        return (
            <div className={classes.Picture_module}>
                <figure className={classes.Picture_module_cont}>
                    <img src={this.props.ditto}/>
                    <p>Ditto</p>
                </figure>
                <figure className={classes.Picture_module_cont}>
                    <img src={this.props.bulb}/>
                    <p>Bulbasaur</p>
                </figure>
                <figure className={classes.Picture_module_cont}>
                    <img src={this.props.weed}/>
                    <p>Weedle</p>
                </figure>
                <figure className={classes.Picture_module_cont}>
                    <img src={this.props.beedrill}/>
                    <p>Beedrill</p>
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