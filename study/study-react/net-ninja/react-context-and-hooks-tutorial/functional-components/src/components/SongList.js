import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import NewSongForm from './NewSongForm'

const SongList = () => {

  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3}
  ])

  const [age, setAge] = useState(20)

  const addSong = (title) => {
    // To read more details, visit 'https://www.npmjs.com/package/uuid'
    setSongs([...songs, { title: title, id: uuidv4() }])
  }

  // The callback function in useEffect hook is going to run everytime the component renders or re-renders.
  // Second parameter is an array of data which we want to watch.
  // When the data inside changes the callback function of first parameter is going to run.
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])

  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])

  // If second parameter is an empty array, the callback function is going to run once in the time of initial rendering.
  useEffect(() => {
    console.log('useEffect hook ran on initial rendering')
  }, [])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      
      {/* <button onClick={addSong}>Add a song</button> */}
      
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  )
}

export default SongList