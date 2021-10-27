import React from 'react';
import { useSongContext } from '../../context/SongContext';

const SongDetails = () => {
    //consumo mi estado global
    const context = useSongContext();

    return (
        <>
            {
                context.selectedSong.title
                    ? (<div>
                        <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} alt="Portada del disco" />
                        <h1>{context.selectedSong.title}</h1>
                        <h4>{context.selectedSong.artist}</h4>
                        <h6>{context.selectedSong.year}</h6>
                    </div>)
                    : <h1> Selecciona una canción </h1>

            }
        </>
    )
}

export default SongDetails;
