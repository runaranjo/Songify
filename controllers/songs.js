// // const song = require('../models/song')

// // const addNewSong = async (songTitle, songArtist, songAlbum, songGenre, songKey) => {
        
// //         try {
// //             // const song = new Song({ songTitle, songArtist, songAlbum, songGenre, songKey })
// //             console.log(songTitle, songArtist, songAlbum, songGenre, songKey+ 'This is the console log in controller')        
// //             await song.newSong(songTitle, songArtist, songAlbum, songGenre, songKey);
    
// //         } catch (error) {
// //             console.error(error)
// //         }
    
// //     }


// //     const sayHi = async (songArtist) => {
        
// //         try {
// //             // const song = new Song({ songTitle, songArtist, songAlbum, songGenre, songKey })
// //             console.log('Hi! '+ songArtist)        

    
// //         } catch (error) {
// //             console.error(error)
// //         }
    
// //     }




//     // module.exports =  addNewSong, sayHi 

//      //Not being Used..yet


//      document.querySelector('#load-songs').addEventListener('click', async () => {
//         try {
//             const response = await fetch('/songs'); // Make a GET request to retrieve the songs
//             const songs = await response.json(); // Parse the response as JSON
            
//             // Update the HTML content to display the songs
//             const songList = document.querySelector('#song-list');
//             songList.innerHTML = ''; // Clear previous content
//             songs.forEach(song => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${song.title} by ${song.artist}`;
//                 songList.appendChild(listItem);
//             });
//         } catch (error) {
//             console.error('Error loading songs:', error);
//         }
//     });


//     document.querySelector('#load-songs').addEventListener('click', async () => {
//         try {
//             console.log('Before query')
//             const songs = await songModel.getAllSongs(); // Make a GET request to retrieve the songs
//             // const songs = await allSongs.json(); // Parse the response as JSON
            
//             // Update the HTML content to display the songs
//             const songList = document.querySelector('#song-list');
//             songList.innerHTML = ''; // Clear previous content
//             songs.forEach(song => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = `${song.title} by ${song.artist}`;
//                 songList.appendChild(listItem);
//             });
//         } catch (error) {
//             console.error('Error loading songs:', error);
//         }
//      }); 


// const songModel = require('../models/song')

// const ul = document.querySelector('#show-song-list')
// const btn = document.querySelector('#show-song-btn')

// btn.addEventListener('click', () => {

//     // const songs = await songModel.getAllSongs();

//     songs.forEach(song => {
//         const li = document.createElement('li');
//         li.textContent = song;
//         ul.appendChild(li);
//     })

// });

     
// function displaySongs( songs ) {
         
//     const songsList = document.getElementById("songsList");
//     songsList.innerHTML = ""; // Clear previous content
//     songs.forEach(function(song) {
//         var listItem = document.createElement("li");
//         listItem.textContent = song.title + " by " + song.artist;
//         songsList.appendChild(listItem);
//     });
// }
// // JavaScript code to handle button click
// document.getElementById("myButton").addEventListener("click", function() {
//     displaySongs();
// });


// module.exports = { displaySongs }