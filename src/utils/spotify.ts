// Looks up each playlist's cover art from Spotify at build time, plus a color
// picked from that art, so adding a playlist only ever needs its link.
// If Spotify can't be reached, the playlist falls back to its own `color`.
import { playlists, spotifyRef, type Playlist } from '../data/playlists';
import { vibrantColor } from './colors';

export type LoadedPlaylist = Playlist & {
  uri: string;
  embed: string;
  /** Spotify cover image URL, if found. */
  art?: string;
  /** Color taken from the cover (or the playlist's own color). */
  tint: string;
};

let cache: Promise<LoadedPlaylist[]> | undefined;

export function getPlaylists() {
  cache ??= Promise.all(playlists.map(load));
  return cache;
}

async function load(playlist: Playlist): Promise<LoadedPlaylist> {
  const art = await coverUrl(playlist.url);
  const tint = (art && (await vibrantColor(art))) || playlist.color;
  return { ...playlist, ...spotifyRef(playlist.url), art, tint };
}

async function coverUrl(url: string) {
  try {
    const res = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`);
    if (!res.ok) return undefined;
    const { thumbnail_url } = await res.json();
    return typeof thumbnail_url === 'string' ? thumbnail_url : undefined;
  } catch {
    return undefined;
  }
}
