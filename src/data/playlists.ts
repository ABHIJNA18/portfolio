// Records for the turntable. To add one: in Spotify, open the playlist →
// ⋯ → Share → Copy link, and paste it as `url`. color is the record label.

export type Playlist = {
  name: string;
  mood: string;
  url: string;
  color: string;
};

export const playlists: Playlist[] = [
  { name: 'A bit of everything', mood: 'my everyday mix', url: 'https://open.spotify.com/playlist/6G5yKRkAJ7fudM0wrWSWW3', color: '#5f8b6e' },
  { name: 'Kodaline ✨', mood: 'Kodaline on repeat', url: 'https://open.spotify.com/playlist/2dep90earDfD5GoJuhxI1b', color: '#2b59c3' },
];

export function spotifyRef(url: string) {
  const match = url.match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?(playlist|album)\/([A-Za-z0-9]+)/);
  if (!match) throw new Error(`Not a Spotify playlist or album link: ${url}`);
  const [, type, id] = match;
  return { uri: `spotify:${type}:${id}`, embed: `https://open.spotify.com/embed/${type}/${id}` };
}
