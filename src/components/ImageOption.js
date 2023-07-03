import React from "react";

const ImageOption = ({image, value}) => {
    return (
        <>
<option value={value}>
    <div>
<img src={image.links[0].href}></img>
    </div>
    </option>
    </>
    )
  
}

export default ImageOption;