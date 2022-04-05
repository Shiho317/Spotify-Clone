import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  console.log()

  const getPlaylist = () => {
    axios.get(`https://api.spotify.com/v1/users/${process.env.REACT_APP_USER_ID}/playlists/${process.env.REACT_APP_PLAYLIST_ID}`, {
      headers: {
              "Authorization": `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getPlaylist();
  },[])

  return (
    <div>
    Hello
    </div>
  );
}

export default App;
