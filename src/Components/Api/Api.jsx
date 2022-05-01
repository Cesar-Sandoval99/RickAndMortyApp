import React, { useEffect, useState } from 'react';
import Residents from '../Residents/Residents';
import SearchBox from '../SearchBox/SearchBox';
import '../Api/ApiStyles.css'
import axios from 'axios';

    

const Api = () => {
    const [locationInfo, setLocationInfo] = useState({})
    const getNumber = Math.floor(Math.random() * 126) +1;

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${getNumber}`)
            .then(res => setLocationInfo(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(locationInfo)

    const population = locationInfo?.residents 

    return (
        <div className=''>
            <h1>Rick and morty wiki</h1>
            {
                <SearchBox setLocationInfo={setLocationInfo} />
            }
            <h3>{locationInfo?.name}</h3>
            <div className='infoCard'>
                <p><b>Type: </b>{locationInfo?.type}</p>
                <p><b>Dimension: </b>{locationInfo?.dimension}</p>
                <p><b>Population:</b> {population?.length} </p>
            </div>
            <h2>Residents</h2>
            {
                <Residents 
                    residents={locationInfo?.residents} 
                    id={locationInfo?.id}
                />
            }
        </div>
    );
};

export default Api;