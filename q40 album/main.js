function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Anis", "Album no 1");
var album2 = make_album("Osama", "Albim no 2");
var album3 = make_album("Yasir", "Album no 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
