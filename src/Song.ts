// Clase que representa una canción
export class Song {
  private static nextId: number = 1;

  public readonly id: number;
  public title: string;
  public artist: string;
  public album: string;
  public durationSeconds: number;
  public genre: string;
  public isFavorite: boolean;

  constructor(
    title: string,
    artist: string,
    album: string,
    durationSeconds: number,
    genre: string
  ) {
    this.id = Song.nextId++;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.durationSeconds = durationSeconds;
    this.genre = genre;
    this.isFavorite = false;
  }

  // Retorna la duración en formato mm:ss
  public getFormattedDuration(): string {
    const minutes = Math.floor(this.durationSeconds / 60);
    const seconds = this.durationSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  // Marca o desmarca la canción como favorita
  public toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  // Muestra la info de la canción como texto
  public toString(): string {
    const fav = this.isFavorite ? "❤️" : "🎵";
    return `${fav} [${this.id}] "${this.title}" - ${this.artist} | ${this.album} | ${this.getFormattedDuration()} | ${this.genre}`;
  }
}