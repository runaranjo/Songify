const db = require('../db/db')

// function Song({ songTitle, songArtist, songAlbum, songGenre, songKey }){
//     this.title = songTitle;
//     this.artist = songArtist;
//     this.album = songAlbum;
//     this.genre = songGenre;
//     this.key = songKey;
// }

const getAllSongs = async () => {
    try {
        console.log('initiating query')
        // const { rows } = await db.query('SELECT * FROM songs WHERE Title =');
        const { rows } = await db.query('SELECT * FROM songs');
        console.log('Query completed.')
        return rows;
    } catch (error) {
        throw error;
    }

}

const getSongById = async (songId) => {
    try {
        console.log('Initiating query')
        const { rows } = await db.query('SELECT * FROM songs WHERE song_id = $1', [songId]);
        console.log('Query completed.')
        return rows;
    } catch (error) {
        throw error;
    }
}


const newSong = async ( songTitle, songArtist, songAlbum, songGenre, songKey ) => {
    try {
        const { rows } = await db.query(
            'INSERT INTO songs (title, artist, album, genre, song_key) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [songTitle, songArtist, songAlbum, songGenre, songKey]
        );

        console.log('Datos insertados correctamente')
        return rows[0];
    } catch (error) {
        throw error;
    }

}



module.exports =  { newSong, getAllSongs, getSongById }


