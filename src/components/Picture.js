import React from 'react';
import List from './List';

const Picture = props => {
  let objects = ["Asteroids", "Comets", "Moon", "Planets", "Stars", "Sun"]

  return (
    <div className='box picture'>
      <h1>{props.pictureHeader}</h1>
      <img alt={props.pictureAlt} src={props.pictureSrc}/>
      <List
      listHeader = 'Here Is a List'
      objects = {objects}
      />

    </div>
  )
}

export default Picture;
