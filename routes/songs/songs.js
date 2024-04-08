const express = require('express')
const router = express.Router()
const songModel = require('../../models/song')
const songController  = require('../../controllers/songs')

// Get songs index
router.get('/', songController.getIndex)
//Get All Songs list
// Get songs index
router.get('/allSongs', songController.getAllSongs)
//get song by id
router.get('/song/:id', songController.getSongById);
// Get New Song Page
router.get('/new', songController.getAddNewSong)
// Post from new song page to insert new song -> Pass to controller object "songController" 
router.post('/new', songController.addNewSong );

module.exports = router 

