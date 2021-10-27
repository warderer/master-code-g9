import React from 'react';
import './songlist.css';
import { useSongContext } from '../../context/SongContext';

const SongList = () => {

    const context = useSongContext();

    return (
        <section>
            {
                context.list.length === 0
                    ? <h1>Cargando</h1>
                    : context.list.map((song) => (
                        <div key={song.id} className="row-song" onClick={()=> {
                            context.setSelectedSong(song);
                        }}>
                            <h4>{song.title}</h4>
                            <h5>{song.artist}</h5>
                        </div>
                    ))
            }
        </section>
    )
}

export default SongList
