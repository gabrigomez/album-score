import React, { useEffect, useState } from 'react';
import { Album } from './Album';

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  
  const fetchAlbums = async() => {
    const response = await fetch('https://abum-rebiew-api.onrender.com/api/v1/albums');
    const data = await response.json();
    
    if(response.ok && albums.length === 0) {
      setAlbums(data);
    }
  };

  useEffect(() => {
    fetchAlbums();
  });

  return (
    <div className='flex flex-col justify-center items-center'>
      <p>Home</p>
      <Album albums={albums} />
    </div>
  )
}