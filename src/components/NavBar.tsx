import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='mb-4 mt-2 flex justify-between'>
      <div className='ml-4'>
        <Link to={'/'} className='text-lg font-semibold'>
          ALBUM REVIEW
        </Link>
      </div>
      <div className='flex mr-4'>
        <div className='mr-2'>
          <p>about</p>
        </div>
        <div>
          <p>add album</p>
        </div>
      </div>
    </nav>
  )
}
