import React from "react";

const ImageOption = ({image, value}) => {
    return (
        <>
<option value={value}>
    <div>
{/* <img src={image.links[0].href}></img>
 */}
 {image.data[0].nasa_id}
    </div>
    </option>
    </>
    )
  
}

export default ImageOption;