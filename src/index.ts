import { Song } from "./Song";
import { MusicLibrary } from "./MusicLibrary";

const library = new MusicLibrary();

const songs = [
  new Song("Blinding Lights", "The Weeknd", "After Hours", 200, "Pop"),
  new Song("Bohemian Rhapsody", "Queen", "A Night at the Opera", 354, "Rock"),
  new Song("Shape of You", "Ed Sheeran", "÷ (Divide)", 234, "Pop"),
  new Song("Stairway to Heaven", "Led Zeppelin", "Led Zeppelin IV", 482, "Rock"),
  new Song("God's Plan", "Drake", "Scorpion", 198, "Hip-Hop"),
  new Song("Bad Guy", "Billie Eilish", "When We All Fall Asleep", 194, "Pop"),
  new Song("Lose Yourself", "Eminem", "8 Mile", 326, "Hip-Hop"),
  new Song("Hotel California", "Eagles", "Hotel California", 391, "Rock"),
  new Song("Levitating", "Dua Lipa", "Future Nostalgia", 203, "Pop"),
  new Song("HUMBLE.", "Kendrick Lamar", "DAMN.", 177, "Hip-Hop"),
];

songs.forEach((song) => library.addSong(song));

console.log("\n🎵 ===== SOUNDBOX =====\n");
console.log("📀 Canciones en la biblioteca:");
library.getAllSongs().forEach((s) => console.log(" ", s.toString()));

console.log("\n🔍 Búsqueda: 'queen'");
library.searchSongs("queen").forEach((s) => console.log(" ", s.toString()));

console.log("\n🎸 Canciones de Rock:");
library.filterByGenre("Rock").forEach((s) => console.log(" ", s.toString()));

console.log("\n🎤 Canciones de Hip-Hop:");
library.filterByGenre("Hip-Hop").forEach((s) => console.log(" ", s.toString()));

console.log("\n📋 Creando playlists...");
const favs = library.createPlaylist("Mis Favoritas");
const rockPlaylist = library.createPlaylist("Rock Classics");
const hiphopPlaylist = library.createPlaylist("Hip-Hop Hits");

const allSongs = library.getAllSongs();
favs.addSong(allSongs[0]);
favs.addSong(allSongs[1]);
favs.addSong(allSongs[4]);

rockPlaylist.addSong(allSongs[1]);
rockPlaylist.addSong(allSongs[3]);
rockPlaylist.addSong(allSongs[7]);

hiphopPlaylist.addSong(allSongs[4]);
hiphopPlaylist.addSong(allSongs[6]);
hiphopPlaylist.addSong(allSongs[9]);

console.log("\n📋 Playlists:");
library.getAllPlaylists().forEach((p) => {
  console.log(" ", p.toString());
  p.getSongs().forEach((s) => console.log("    •", s.title, "-", s.artist));
});

console.log("\n📊 Estadísticas de la biblioteca:");
console.log(library.getStats());