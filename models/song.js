const db = require('../db/db')

function Song({ songTitle, songArtist, songAlbum, songGenre, songKey }){
    this.title = songTitle;
    this.artist = songArtist;
    this.album = songAlbum;
    this.genre = songGenre;
    this.key = songKey;
}

Song.prototype.newSong = async () => {
    // try {
    //     const { rows } = await db.query(
    //         'INSERT INTO songs (title, artist, album, genre, song_key) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    //         [this.title, this.artist, this.album, this.genre, this.key]
    //     );
    //     return rows[0];
    // } catch (error) {
    //     throw error;
    // }

    console.log(songAlbum)


}



module.exports = Song;