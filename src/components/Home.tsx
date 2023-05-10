import React, { useEffect, useState } from 'react';

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  console.log(albums);

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
    <div className='flex justify-center'>
      <p>Home</p>
    </div>
  )
}