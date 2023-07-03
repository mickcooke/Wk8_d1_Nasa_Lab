import React from "react";
import FavButton from "./FavButton";

const Image = ({image, addToFavourites}) => {

    const onClick = (event) => {
        addToFavourites({image});
      
    }

    return (
        <>
        <p>This is the image</p>
        {image ? <img src={image.links[0].href} width="300"></img> : null}
        <br/>
        <FavButton onClick={onClick} value={image}></FavButton>
        </>
    )
}
  
export default Image;