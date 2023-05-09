import React, { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    fetch('https://abum-rebiew-api.onrender.com/api/v1/albums')
      .then((response) => {
        if(response.ok) {
          console.log(response);
        }
        throw new Error('Something went wrong');
      })
  })

  return (
    <div className='bg-cyan-300'>
      <p>Home</p>
    </div>
  )
}