import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='Robots' />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
