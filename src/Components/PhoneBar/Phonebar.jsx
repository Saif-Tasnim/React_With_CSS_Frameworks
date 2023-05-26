import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Phonebar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => console.log(data))
    }, [])

    return (

        <div>
            {/* https://openapi.programming-hero.com/api/phones?search=iphone */}

        </div>
    );
};

export default Phonebar;