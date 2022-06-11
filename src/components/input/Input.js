import React, {Component} from 'react';
import classes from "./Input.module.scss";

class Input extends Component {
    state = {
        props: '',
    };

   onSearchInp = event => {
        this.setState({
            props: event.target.value
        })
    };

    render() {
        return (
        <div className={classes.Input_module}>
            <input type={'text'} className={classes.Input_module_inp} placeholder={'Find pokemon'} onChange= {this.onSearchInp}/>
            <input type={'button'} className={classes.Input_module_btn} value={'Search'}/>
            <p className={classes.Input_module_line}></p>
        </div>
        )
    };
  }

export default Input;