import React from "react";
import "../assets/styles/Gallery.css";
import foto1 from "../assets/img/foto1.jpg";
import foto2 from "../assets/img/foto2.jpg";
import foto3 from "../assets/img/foto3.jpg";
import foto4 from "../assets/img/foto4.jpg";
import foto5 from "../assets/img/foto5.jpg";
import foto6 from "../assets/img/foto6.jpg";
import foto7 from "../assets/img/foto7.jpg";
import foto8 from "../assets/img/foto8.jpg";
import foto9 from "../assets/img/foto9.jpg";

const Gallery = () => {
  const allPhoto = [
    { url: foto1 },
    { url: foto2 },
    { url: foto3 },
    { url: foto4 },
    { url: foto5 },
    { url: foto6 },
    { url: foto7 },
    { url: foto8 },
    { url: foto9 },
  ];
  return (
    <div className="gallery">
      <span>---</span>
      <h1>GALLERY</h1>
      <span>---</span>
      <div className="photo">
        {allPhoto.map((foto) => (
          <img src={foto.url} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
