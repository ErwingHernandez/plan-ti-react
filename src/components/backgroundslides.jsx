import { useEffect, useState } from "react";
import '../styles/backgroundslides.css'

const images = [
    '/labA.jpeg',
    '/labA2.jpeg',
    '/labB.jpeg',
    '/labB2.jpeg',
    '/labC.jpeg',
    '/labC2.jpeg',
];

function Backgroundslides() {
    const [currentImage, setCurrentImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 7000);
        return () => clearInterval(interval);
    
    },[]);

    return(
         <div className="background-slideshow">
            <div className="filtro"></div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Fondo ${index}`}
          className={`slide ${index === currentImage  ? 'show' : ''}`}
        />
      ))}
    </div>
    );

}

export default Backgroundslides