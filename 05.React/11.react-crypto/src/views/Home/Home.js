import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const { response, loading, error } = useAxios({
        method: 'GET',
        url: 'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    });

    const handleChange = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (response !== null) {
            setCoins(response);
            console.log(response);
        }
    }, [response]);

    const filteredCoins = coins && coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>Home</h1>
            <div className='coin-app'>
                <div className='coin-search'>
                    <h1 className='coin-text'>Search a currency</h1>
                    <form>
                        <input
                            className='coin-input'
                            type='text'
                            onChange={handleChange}
                            placeholder='Search'
                        />
                    </form>
                </div>
                {error && (
                    <div>
                        <p>{error.message}</p>
                    </div>
                )}

                {coins && (<div>
                    <p>Algo</p>
                </div>)
                }
            </div>
        </>
    )
}

export default Home;