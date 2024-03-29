const song = require('../models/song')

const addNewSong = async (songTitle, songArtist, songAlbum, songGenre, songKey) => {
        
        try {
            // const song = new Song({ songTitle, songArtist, songAlbum, songGenre, songKey })
            console.log(songTitle, songArtist, songAlbum, songGenre, songKey+ 'This is the console log in controller')        
            await song.newSong(songTitle, songArtist, songAlbum, songGenre, songKey);
    
        } catch (error) {
            console.error(error)
        }
    
    }


    module.exports = addNewSong 