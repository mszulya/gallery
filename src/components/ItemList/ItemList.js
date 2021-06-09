import React from 'react';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div  className='block'>
            {items.map(item =><img className='block__item' src={item.url} alt=''></img>)}
        </div>
    )
}

export default ItemList;