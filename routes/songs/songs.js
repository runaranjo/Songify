const express = require('express')
const router = express.Router()
const songModel = require('../../models/song')




// Get songs index
router.get('/', async (req, res) => {


    try {
        // const songs = await songModel.getAllSongs();
        // res.send(songs)
        res.render("songs/index")
    } catch (error) {
        res.send(error)
    }
    
})

//Get All Songs list
// Get songs index
router.get('/allSongs', async (req, res) => {


    try {
        const songs = await songModel.getAllSongs();
        // res.render("songs/allSongs", { songs })
        res.send(songs)
        // res.render("songs/index")
        
    } catch (error) {
        res.send(error)
    }
    
})

//get song by id

router.get('/song/:id', async (req, res) => {
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
});




// Get New Song Page
router.get('/new', (req, res) => {
    res.render("songs/new")
})


// Post from new song page to insert new song -> Pass to controller object "songController" 
router.post('/new', async (req, res) => {
    const {songTitle, songArtist, songAlbum, songGenre, songKey} = req.body
    try {
        console.log(songTitle, songArtist, songAlbum, songGenre, songKey+ ' This is the console log in routes');
        const newSong = await songModel.newSong(songTitle, songArtist, songAlbum, songGenre, songKey);
        res.status(200).json(newSong);
    } catch (error) {
        console.error(error)
    }
});





module.exports = router 

