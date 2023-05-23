import React from 'react';

interface Album {
  id?: number
}
interface Props {
  albums: Array<Album>
}

export const Album: React.FC<Props> = ({albums}) => {
  console.log(typeof(albums))
  console.log(albums)
  return (
    <div>
      <p>Albums</p>
    </div>
  )
}

