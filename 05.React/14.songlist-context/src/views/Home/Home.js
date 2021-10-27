import React from 'react';
import './home.css';
import SongList from '../../components/SongList';
import SongDetails from '../../components/SongDetails';

const Home = () => {
    return (
        <div className="home-container">
            <div className="izquierdo">
                <h2>Lado Izquierdo</h2>
                <SongList />
            </div>

            <div className="derecho">
                <h2>Derecho</h2>
                <SongDetails />
            </div>
        </div>
    )
}

export default Home;
