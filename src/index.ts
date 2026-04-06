import { Song } from "./Song";
import { MusicLibrary } from "./MusicLibrary";

// ── Creamos la biblioteca ──────────────────────────────────
const library = new MusicLibrary();

// ── Cargamos algunas canciones de ejemplo ─────────────────
const songs = [
  new Song("Blinding Lights", "The Weeknd", "After Hours", 200, "Pop"),
  new Song("Bohemian Rhapsody", "Queen", "A Night at the Opera", 354, "Rock"),
  new Song("Shape of You", "Ed Sheeran", "÷ (Divide)", 234, "Pop"),
  new Song("Stairway to Heaven", "Led Zeppelin", "Led Zeppelin IV", 482, "Rock"),
  new Song("God's Plan", "Drake", "Scorpion", 198, "Hip-Hop"),
  new Song("Bad Guy", "Billie Eilish", "When We All Fall Asleep", 194, "Pop"),
];

songs.forEach((song) => library.addSong(song));

// ── Mostramos todas las canciones ─────────────────────────
console.log("\n🎵 ===== SOUNDBOX =====\n");
console.log("📀 Canciones en la biblioteca:");
library.getAllSongs().forEach((s) => console.log(" ", s.toString()));

// ── Buscamos canciones ────────────────────────────────────
console.log("\n🔍 Búsqueda: 'queen'");
library.searchSongs("queen").forEach((s) => console.log(" ", s.toString()));

// ── Filtramos por género ──────────────────────────────────
console.log("\n🎸 Canciones de Rock:");
library.filterByGenre("Rock").forEach((s) => console.log(" ", s.toString()));

// ── Creamos playlists ─────────────────────────────────────
console.log("\n📋 Creando playlists...");
const favs = library.createPlaylist("Mis Favoritas");
const rockPlaylist = library.createPlaylist("Rock Classics");

// Agregamos canciones a las playlists
const allSongs = library.getAllSongs();
favs.addSong(allSongs[0]);
favs.addSong(allSongs[1]);
favs.addSong(allSongs[4]);

rockPlaylist.addSong(allSongs[1]);
rockPlaylist.addSong(allSongs[3]);

// Intentamos agregar una canción duplicada
favs.addSong(allSongs[0]);

// ── Mostramos playlists ───────────────────────────────────
console.log("\n📋 Playlists:");
library.getAllPlaylists().forEach((p) => {
  console.log(" ", p.toString());
  p.getSongs().forEach((s) => console.log("    •", s.title, "-", s.artist));
});

// ── Estadísticas ──────────────────────────────────────────
console.log("\n📊 Estadísticas de la biblioteca:");
console.log(library.getStats());