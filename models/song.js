const db = require('../db/db')

function Song({ songTitle, songArtist, songAlbum, songGenre, songKey }){
    this.title = songTitle;
    this.artist = songArtist;
    this.album = songAlbum;
    this.genre = songGenre;
    this.key = songKey;
}

// Song.prototype.newSong = async ( songTitle, songArtist, songAlbum, songGenre, songKey ) => {
//     // try {
//     //     const { rows } = await db.query(
//     //         'INSERT INTO songs (title, artist, album, genre, song_key) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//     //         [this.title, this.artist, this.album, this.genre, this.key]
//     //     );
//     //     return rows[0];
//     // } catch (error) {
//     //     throw error;
//     // }

//     console.log(this.title, this.artist, this.album, this.genre, this.key)


// }


const addSong = (songTitle, songArtist, songAlbum, songGenre, songKey) => {
    try{
    console.log(songTitle, songArtist, songAlbum, songGenre, songKey)
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




module.exports = { Song, addSong, newSong };