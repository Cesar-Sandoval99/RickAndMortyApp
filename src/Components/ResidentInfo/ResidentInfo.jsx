import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResidentInfo = ({ residentUrl }) => {

    const [ resident, setResident ] = useState({});

    useEffect(() => {
        axios.get(residentUrl)
            .then(res => setResident(res.data));
    }, [])


    const episodes = resident?.episode

    return (
        <div className='residentCard' key={residentUrl} >
            <div>
                <img className='residentImg' src={resident?.image} alt="resident-img" />
                <div className='InfoCard'>
                    <ul>
                        <li>
                            <p><b>Name:</b> {resident?.name}</p>
                        </li>
                        <li>
                            <p><b>Status:</b> {resident?.status} - {resident.species}</p>
                        </li>
                        <li>
                            <p><b>Origin:</b> {resident.origin?.name}</p>
                        </li>
                        <li>
                            <b>Episodes where appear:</b> {episodes?.length}
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;