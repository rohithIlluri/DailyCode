import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Make an API request to fetch your YouTube playlists
    axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        part: 'snippet',
        mine: true,
        key: 'AIzaSyBw11B3TGPA6JTQhZ82ydLyDt9v3U6TZu4', // Replace with your YouTube Data API key
      }
    })
    .then(response => {
      setPlaylists(response.data.items);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h2>My Playlists</h2>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>
            <a href={`https://www.youtube.com/playlist?list=${playlist.id}`} target="_blank" rel="noopener noreferrer">
              {playlist.snippet.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPlaylists;
