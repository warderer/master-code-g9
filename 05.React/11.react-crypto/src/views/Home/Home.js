import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

const Home = () => {
    const [coins, setCoins] = useState([]);

    const { response, loading, error } = useAxios({
        method: 'GET',
        url: 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    });

    useEffect(() =>{
        if (response !== null) {
            setCoins(response);
            console.log(response);
        }
    },[response]);

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;