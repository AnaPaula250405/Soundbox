import { Playlist } from "../src/Playlist";
import { Song } from "../src/Song";

describe("Playlist", () => {
  let playlist: Playlist;
  let song1: Song;
  let song2: Song;

  beforeEach(() => {
    playlist = new Playlist("Mis Favoritas");
    song1 = new Song("Bohemian Rhapsody", "Queen", "A Night at the Opera", 354, "Rock");
    song2 = new Song("Stairway to Heaven", "Led Zeppelin", "Led Zeppelin IV", 482, "Rock");
  });

  test("debe crear una playlist con nombre correcto y vacía", () => {
    expect(playlist.name).toBe("Mis Favoritas");
    expect(playlist.getSongs()).toHaveLength(0);
  });

  test("debe agregar canciones correctamente", () => {
    playlist.addSong(song1);
    expect(playlist.getSongs()).toHaveLength(1);
    expect(playlist.getSongs()[0].title).toBe("Bohemian Rhapsody");
  });

  test("no debe agregar la misma canción dos veces", () => {
    playlist.addSong(song1);
    playlist.addSong(song1);
    expect(playlist.getSongs()).toHaveLength(1);
  });

  test("debe eliminar una canción por ID", () => {
    playlist.addSong(song1);
    playlist.addSong(song2);
    const result = playlist.removeSong(song1.id);
    expect(result).toBe(true);
    expect(playlist.getSongs()).toHaveLength(1);
  });

  test("debe retornar false al intentar eliminar una canción que no existe", () => {
    const result = playlist.removeSong(9999);
    expect(result).toBe(false);
  });

  test("debe calcular correctamente la duración total", () => {
    playlist.addSong(song1);
    playlist.addSong(song2);
    expect(playlist.getTotalDuration()).toBe(836);
  });

  test("debe formatear la duración total correctamente", () => {
    playlist.addSong(song1);
    playlist.addSong(song2);
    expect(playlist.getFormattedTotalDuration()).toBe("13m 56s");
  });

  test("getSongs debe retornar una copia, no el array original", () => {
    playlist.addSong(song1);
    const copy = playlist.getSongs();
    copy.push(song2);
    expect(playlist.getSongs()).toHaveLength(1);
  });
});