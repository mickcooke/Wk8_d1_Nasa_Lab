import React from "react";

const FavButton = ({onClick, image, favImageSelected}) => {
    return <button onClick={onClick} value={image}>Add to Favourites</button>
  
}

export default FavButton;   