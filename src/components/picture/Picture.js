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
                <img src={this.props.ditto}/>
                <img src={this.props.bulb}/>
                <img src={this.props.beedrill}/>
                <img src={this.props.weed}/>
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