const songModel = require('../models/song')


// Get the songs Route method GET
getIndex = async (req, res) => {
    try {
        res.render('songs/index')
    } catch (error) {
        res.send(error)
    }
}

// Get all songs in library route method GET
getAllSongs = async (req, res) => {

    try {
        const songs = await songModel.getAllSongs();
        // res.render("songs/allSongs", { songs })
        res.send(songs)
        // res.render("songs/index")
        
    } catch (error) {
        res.send(error)
    }

}

// Get song by its id route method GET
getSongById = async (req, res) => {
    const songId = req.params.id;

    try {
        const song = await songModel.getSongById(songId);
        if (!song || song.length === 0) {
            res.status(404).send("Song not found");
        } else {
            res.send(song);
        }
    } catch (error) {
        console.error('Error fetching song by ID:', error);
        res.status(500).send("Internal server error");
    }
}

// Add New Song Route Method GET
getAddNewSong = (req, res) => {
    res.render("songs/new")
}

// Add new song to library Method POST

addNewSong = async (req, res) => {
    const {songTitle, songArtist, songAlbum, songGenre, songKey} = req.body
    try {
        console.log(songTitle, songArtist, songAlbum, songGenre, songKey+ ' This is the console log in routes');
        const newSong = await songModel.newSong(songTitle, songArtist, songAlbum, songGenre, songKey);
        res.status(200).json(newSong);
    } catch (error) {
        console.error(error)
    }
}



module.exports = { getIndex, getAllSongs, getSongById, getAddNewSong, addNewSong }