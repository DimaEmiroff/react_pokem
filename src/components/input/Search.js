import React, {useEffect, useState} from 'react';

const Search = () => {
    const [pokem, setPokem] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res => res.json())
            .then(res => setPokem(res))
    })
    return (
        <div>

        </div>
    );
};

export default Search;