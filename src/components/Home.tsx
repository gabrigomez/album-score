import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    const fetchAlbums = async() => {
      const response = await fetch('https://abum-rebiew-api.onrender.com/api/v1/albums');
      const data = await response.json();
      if(response.ok) {
        console.log(data);
      }
    }
    fetchAlbums();
  })

  return (
    <div className='bg-cyan-300'>
      <p>Home</p>
    </div>
  )
}