import React from 'react';
import Numbers from './Numbers';
import Picture from './Picture';


const Wrapper = props => {
  let date = (new Date).toString();
  let random = parseInt(Math.random() * 100);

  return (

    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Numbers
      numbersHeader="Today's Date and Random Number"
      date = {date}
      random = {random}
      />
      <Picture
      pictureHeader = 'Look at This Picture'
      pictureAlt = 'Clever EEs'
      pictureSrc = 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'
      />
    </div>
  )
}

export default Wrapper;
