import React from 'react';

function Menu(props){

    const listLInks = props.links.map(
        (link, index)=><li key={index}>{link}</li>
    )

    return (
      <ul className="menu">
        {listLInks}
      </ul>
    )
}

export default Menu;
  