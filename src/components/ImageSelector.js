import React from "react";
import ImageOption from './ImageOption.js'

const ImageSelector = ({images, onImageSelected}) => {

    const imageOptions = images.map((image, index) => {
        return <ImageOption image={image} key={index} value={index} onImageSelected={onImageSelected}/>
      
    });

    const handleChange = event => {
        const index= event.target.value
        onImageSelected(images[index]);
    }

    const dropdownStyles = {
        control: (provided) => ({
          ...provided,
          width: 600, // Adjust the width as desired
        }),
      };


    return (
        <>
  
        
       <select onChange={handleChange} styles={dropdownStyles}>{imageOptions}</select>
                
    </>
    )
  
}

export default ImageSelector;