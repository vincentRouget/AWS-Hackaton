import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectDestination = () => {


    const [destination, setDestination] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/destination")
            .then((res) => {
                setDestination(res.data)
            }
            ).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>

            <div className='destinationSelection'>
                {destination.map((info) => (
                    <div>
                        <>

                            <div>{info.nom_destination}</div>
                            <div>{info.distance}</div>
                        </>

                    </div>
                ))}
            </div>

            <button className="buttonValidation" type="submit">
                Valider
            </button>
        </div>
    );
};

export default SelectDestination;