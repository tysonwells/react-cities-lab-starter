// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData";

export default function App() {
  // USE useState TO CREATE  bigImage, setBigImage
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  };

  // LOOP OVER THE IMAGESARR AND RETURN AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS INCLUDING onClick
  const images = imagesArr.map((image, index) => {
    return (
      <img
        // className={ bigImage === image.img ? "thumb active" : "thumb" }
        style={{ border: bigImage === image.img ? "5px solid green" : "" }}
        src={image.img}
        alt={image.city}
        key={index}
        className="thumb"
        onClick={() => handleClick(image.img)}
      />
    );
  });

  console.log("images array", images);

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* RENDER THE IMAGES */}
          {images}
        </div>
        {/* RENDER THE BIG IMAGE */}
        <img src={bigImage} id="bigimage" alt="bigImaage" />
      </div>
    </div>
  );
}
