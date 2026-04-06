import { Song } from "./Song";
import { Playlist } from "./Playlist";

// Clase principal que gestiona toda la biblioteca de música
export class MusicLibrary {
  private songs: Song[];
  private playlists: Playlist[];

  constructor() {
    this.songs = [];
    this.playlists = [];
  }

  // ── CANCIONES ──────────────────────────────────────────────

  public addSong(song: Song): void {
    this.songs.push(song);
  }

  public getAllSongs(): Song[] {
    return [...this.songs];
  }

  public findSongById(id: number): Song | undefined {
    return this.songs.find((s) => s.id === id);
  }

  // Busca canciones por título o artista (sin importar mayúsculas)
  public searchSongs(query: string): Song[] {
    const q = query.toLowerCase();
    return this.songs.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q)
    );
  }

  // Filtra canciones por género
  public filterByGenre(genre: string): Song[] {
    return this.songs.filter(
      (s) => s.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // ── PLAYLISTS ──────────────────────────────────────────────

  public createPlaylist(name: string): Playlist {
    const playlist = new Playlist(name);
    this.playlists.push(playlist);
    console.log(`🎵 Playlist "${name}" creada.`);
    return playlist;
  }

  public getAllPlaylists(): Playlist[] {
    return [...this.playlists];
  }

  public findPlaylist(name: string): Playlist | undefined {
    return this.playlists.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
  }

  // ── ESTADÍSTICAS ───────────────────────────────────────────

  public getStats(): object {
    const totalSongs = this.songs.length;
    const totalPlaylists = this.playlists.length;
    const genres = [...new Set(this.songs.map((s) => s.genre))];
    const artists = [...new Set(this.songs.map((s) => s.artist))];

    return {
      totalSongs,
      totalPlaylists,
      totalGenres: genres.length,
      totalArtists: artists.length,
      genres,
    };
  }
}