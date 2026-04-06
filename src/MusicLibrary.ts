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

  // Elimina una canción de la biblioteca por su ID
  public removeSong(id: number): boolean {
    const index = this.songs.findIndex((s) => s.id === id);
    if (index === -1) return false;
    this.songs.splice(index, 1);
    return true;
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

  // Retorna solo las canciones marcadas como favoritas
  public getFavoriteSongs(): Song[] {
    return this.songs.filter((s) => s.isFavorite);
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

  // Elimina una playlist por nombre
  public removePlaylist(name: string): boolean {
    const index = this.playlists.findIndex(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    if (index === -1) return false;
    this.playlists.splice(index, 1);
    return true;
  }

  // ── ESTADÍSTICAS ───────────────────────────────────────────

  public getStats(): object {
    const totalSongs = this.songs.length;
    const totalPlaylists = this.playlists.length;
    const genres = [...new Set(this.songs.map((s) => s.genre))];
    const artists = [...new Set(this.songs.map((s) => s.artist))];
    const totalFavorites = this.getFavoriteSongs().length;

    return {
      totalSongs,
      totalPlaylists,
      totalGenres: genres.length,
      totalArtists: artists.length,
      totalFavorites,
      genres,
    };
  }
}