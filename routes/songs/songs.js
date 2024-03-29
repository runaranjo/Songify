const express = require('express')
const router = express.Router()
// const Song = require('../../models/song')
const songController = require('../../controllers/songs')



router.get('/new', (req, res) => {
    res.render("songs/new")
})


// 
router.post('/new', async (req, res, next) => {
    const {songTitle, songArtist, songAlbum, songGenre, songKey} = req.body
    try {
        console.log(songTitle, songArtist, songAlbum, songGenre, songKey+ 'This is the console log in routes')
        const newSong = await songController(songTitle, songArtist, songAlbum, songGenre, songKey);
        res.status(200).json(newSong);
    } catch (error) {
        const errorToThrow = new Error();
        next(errorToThrow);
    }
});



module.exports = router 

