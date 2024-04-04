function displaySongs() {
         
    const songsList = document.getElementById("songsList");
    songsList.innerHTML = ""; // Clear previous content
    songs.forEach(function(song) {
        var listItem = document.createElement("li");
        listItem.textContent = song.title + " by " + song.artist;
        songsList.appendChild(listItem);
    });
}
// JavaScript code to handle button click
document.getElementById("myButton").addEventListener("click", function() {
    displaySongs();
});

module.exports = {
    displaySongs
}