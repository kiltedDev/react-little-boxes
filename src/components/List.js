import React from 'react';

const List = props => {
  let objectList = props.objects.map(object =>{
    return (
      <li>{object}</li>
    );
  })

  return (
    <div className='box list'>
      <h1>{props.listHeader}</h1>
      <ul>
      {objectList}
      </ul>
    </div>
  )
}

export default List;
