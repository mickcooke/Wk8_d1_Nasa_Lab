import React,{useState, useEffect} from 'react';

const GalleryContainer = () => {
  const [images, setImages] = useState("");

  const getImages = () => {
    fetch("https://images-api.nasa.gov/search?q=galaxies")
    .then(response => response.json())
    .then(imagesData => setImages(imagesData.collection.items));
  }

useEffect(() => {
  getImages();
//   console.log(images[0]);
},[])


return (
    <>
    <p>I am a gallery container</p>
    {images ? <img src={images[5].links[0].href}></img> : null}
    </>
)

}

export default GalleryContainer;
