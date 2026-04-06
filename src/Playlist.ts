import { Song } from "./Song";

// Clase que representa una playlist de canciones
export class Playlist {
  public name: string;
  private songs: Song[];
  public createdAt: Date;

  constructor(name: string) {
    this.name = name;
    this.songs = [];
    this.createdAt = new Date();
  }

  // Agrega una canción a la playlist (evita duplicados)
  public addSong(song: Song): void {
    const alreadyExists = this.songs.some((s) => s.id === song.id);
    if (alreadyExists) {
      console.log(`"${song.title}" ya está en la playlist "${this.name}".`);
      return;
    }
    this.songs.push(song);
    console.log(`✅ "${song.title}" agregada a "${this.name}".`);
  }

  // Elimina una canción por su ID
  public removeSong(songId: number): boolean {
    const index = this.songs.findIndex((s) => s.id === songId);
    if (index === -1) return false;
    this.songs.splice(index, 1);
    return true;
  }

  // Retorna todas las canciones
  public getSongs(): Song[] {
    return [...this.songs];
  }

  // Calcula la duración total de la playlist en segundos
  public getTotalDuration(): number {
    return this.songs.reduce((total, song) => total + song.durationSeconds, 0);
  }

  // Retorna la duración total en formato legible
  public getFormattedTotalDuration(): string {
    const total = this.getTotalDuration();
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
    if (minutes > 0) return `${minutes}m ${seconds}s`;
    return `${seconds}s`;
  }

  // Muestra el resumen de la playlist
  public toString(): string {
    return `Playlist: "${this.name}" | ${this.songs.length} canciones | Duración: ${this.getFormattedTotalDuration()}`;
  }
}