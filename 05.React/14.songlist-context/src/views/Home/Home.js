import React from 'react';
import './home.css';
import { SongProvider } from '../../context/SongContext';
import SongList from '../../components/SongList';
import SongDetails from '../../components/SongDetails';

const Home = () => {
    return (
        <div className="home-container">
            <SongProvider>
                <div className="izquierdo">
                    <h2>Lado Izquierdo</h2>
                    <SongList />
                </div>

                <div className="derecho">
                    <h2>Derecho</h2>
                    <SongDetails />
                </div>
            </SongProvider>
        </div>
    )
}

export default Home;
