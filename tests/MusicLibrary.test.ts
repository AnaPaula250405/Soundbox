import { MusicLibrary } from "../src/MusicLibrary";
import { Song } from "../src/Song";

describe("MusicLibrary", () => {
  let library: MusicLibrary;
  let song1: Song;
  let song2: Song;
  let song3: Song;

  beforeEach(() => {
    library = new MusicLibrary();
    song1 = new Song("Blinding Lights", "The Weeknd", "After Hours", 200, "Pop");
    song2 = new Song("Bohemian Rhapsody", "Queen", "A Night at the Opera", 354, "Rock");
    song3 = new Song("God's Plan", "Drake", "Scorpion", 198, "Hip-Hop");

    library.addSong(song1);
    library.addSong(song2);
    library.addSong(song3);
  });

  test("debe contener todas las canciones agregadas", () => {
    expect(library.getAllSongs()).toHaveLength(3);
  });

  test("debe encontrar una canción por ID", () => {
    const found = library.findSongById(song1.id);
    expect(found).toBeDefined();
    expect(found?.title).toBe("Blinding Lights");
  });

  test("debe retornar undefined si el ID no existe", () => {
    const found = library.findSongById(9999);
    expect(found).toBeUndefined();
  });

  test("debe buscar canciones por título (sin importar mayúsculas)", () => {
    const results = library.searchSongs("blinding");
    expect(results).toHaveLength(1);
    expect(results[0].title).toBe("Blinding Lights");
  });

  test("debe buscar canciones por artista", () => {
    const results = library.searchSongs("queen");
    expect(results).toHaveLength(1);
    expect(results[0].artist).toBe("Queen");
  });

  test("debe retornar array vacío si no hay resultados", () => {
    const results = library.searchSongs("xyz_no_existe");
    expect(results).toHaveLength(0);
  });

  test("debe filtrar canciones por género", () => {
    const rockSongs = library.filterByGenre("Rock");
    expect(rockSongs).toHaveLength(1);
    expect(rockSongs[0].title).toBe("Bohemian Rhapsody");
  });

  test("debe crear y encontrar una playlist", () => {
    library.createPlaylist("Mis Favoritas");
    const found = library.findPlaylist("Mis Favoritas");
    expect(found).toBeDefined();
    expect(found?.name).toBe("Mis Favoritas");
  });

  test("debe retornar estadísticas correctas", () => {
    const stats = library.getStats() as {
      totalSongs: number;
      totalPlaylists: number;