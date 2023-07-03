import React from "react";

const ImageOption = ({image, value}) => {

if(!image) {
    return null
}

    return (
        <>
<option value={value}>
    <div>
 {image.data[0].nasa_id}
    </div>
    </option>
    </>
    )
  
}

export default ImageOption;