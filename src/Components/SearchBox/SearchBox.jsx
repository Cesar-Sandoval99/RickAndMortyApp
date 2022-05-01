import React, {useState} from 'react';
import '../SearchBox/SearchBoxStyles.css'
import axios from 'axios';

const SearchBox = ({setLocationInfo}) => {

    const [id, setId] = useState("")

    const searchResident = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocationInfo(res.data))
    }

    return (
        <div className='searchbox'>
            <input type="number" 
            onChange={e => setId(e.target.value)} 
            value={id} 
            placeholder='ID (1-126)'
            />
            <button onClick={searchResident} >Search ID</button>
        </div>
    );
};

export default SearchBox;