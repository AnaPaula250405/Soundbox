import { Song } from "../src/Song";

describe("Song", () => {
  let song: Song;

  beforeEach(() => {
    song = new Song("Blinding Lights", "The Weeknd", "After Hours", 200, "Pop");
  });

  test("debe crear una canción con los datos correctos", () => {
    expect(song.title).toBe("Blinding Lights");
    expect(song.artist).toBe("The Weeknd");
    expect(song.album).toBe("After Hours");
    expect(song.durationSeconds).toBe(200);
    expect(song.genre).toBe("Pop");
  });

  test("debe asignar un ID único a cada canción", () => {
    const song2 = new Song("Shape of You", "Ed Sheeran", "Divide", 234, "Pop");
    expect(song2.id).not.toBe(song.id);
  });

  test("debe formatear correctamente la duración en mm:ss", () => {
    expect(song.getFormattedDuration()).toBe("3:20");
  });

  test("debe formatear correctamente cuando los segundos son menores a 10", () => {
    const shortSong = new Song("Intro", "Artist", "Album", 65, "Pop");
    expect(shortSong.getFormattedDuration()).toBe("1:05");
  });

  test("toString debe incluir el título y el artista", () => {
    const text = song.toString();
    expect(text).toContain("Blinding Lights");
    expect(text).toContain("The Weeknd");
  });
});