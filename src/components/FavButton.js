import React from "react";

const FavButton = ({onClick, image, favImageSelected}) => {
    return <button onClick={onClick} value={image}>Add Image</button>
  
}

export default FavButton;