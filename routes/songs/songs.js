const express = require('express')
const router = express.Router()
const Song = require('../../models/song')

router.get('/new', (req, res) => {
    res.render("songs/new")
})


router.post('/new', async (req, res, next) => {
    const {songTitle, songArtist, songAlbum, songGenre, songKey} = req.body
    try {
        const song = new Song({ songTitle, songArtist, songAlbum, songGenre, songKey })
        console.log(song.title, song.artist, songAlbum, songGenre, songKey+ 'This is the console log in routes')
        const newSong = await song.newSong()
        res.json(newSong)
        // console.log(songTitle, songArtist, songAlbum, songGenre, songKey)

    } catch (error) {
        const errorToThrow = new Error();
        switch (error?.code) {
            case '23505':
                errorToThrow.message = 'User already exists';
                errorToThrow.statusCode = 403;
                break;
            default:
                errorToThrow.statusCode = 500;
        }
        //pass error to next()
        next(errorToThrow);
    }

});


module.exports = router 



// {
// 	"songTitle": "Little Sister",
//     "songArtist": "Queens of the stone age",
//     "songAlbum": "Just a test",
//     "songGenre":"Metal",
//     "songKey":"G"
    
//     }