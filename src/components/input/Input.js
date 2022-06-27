import React, {useState} from 'react';
import classes from "./Input.module.scss";


const Input = (props) => {
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     const getPok = async () => {
    //     await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    //             .then(res => res.json())
    //             .then(res => setPok(res.sprites.front_default))
    //     };
    //    getPok(a)
    // },[search])

    console.log(search)

      return <div className={classes.Input_module}>
          <input type={'text'} className={classes.Input_module_inp} placeholder={'Find pokemon'} value={search} onChange= {event => setSearch(event.target.value)}/>
          <input type={'button'} className={classes.Input_module_btn} value={'Search'} onClick= {() => props.onClick(search)}/>
          <img className={classes.Input_module_line} alt={''}/>
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