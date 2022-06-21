import React, {useEffect, useState} from 'react';
import classes from "./Input.module.scss";


const Input = () => {
    const [pok, setPok] = useState([]);
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    let a =  '';

    useEffect(() => {
        const getPok = async () => {
        a = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
                .then(res => res.json())
                .then(res => setPok(res.sprites.front_default))
        };
       getPok(a)
    },[search])

    console.log(search)
    console.log(pok)
      return <div className={classes.Input_module}>
          <input type={'text'} className={classes.Input_module_inp} placeholder={'Find pokemon'} value={query} onChange= {event => setQuery(event.target.value)}/>
          <input type={'button'} className={classes.Input_module_btn} value={'Search'} onClick= {() => setSearch(query)}/>
          <img className={classes.Input_module_line}/>
         </div>

}
export default Input;



// class Input extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             props: '',
//             species: {},
//             sprites: {},
//         };
//     }
//         async componentDidMount(){
//             let pok = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//                     .then(res => res.json())
//                     .then(res => this.setState({
//                         sprites: res
//                     }))
//     console.log(pok)
//     }
//     };
//
//     render() {