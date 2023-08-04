import "./Scroll.css";
import React, { useState, useEffect } from 'react';
import ovillo from "./Assets/ovillo.png";

const Scroll = () => {
    const [width, setWidth] = useState(0);

    const scroll = () => {
        let fullHeight = document.body.scrollHeight - window.innerHeight;
        let scr = window.pageYOffset;
        let progress = (scr / fullHeight) * 100;
        setWidth(Math.round(progress));
    };

    useEffect(() => {
        // Agregar el event listener para el evento 'scroll' al montar el componente
        window.addEventListener('scroll', scroll);
        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const rotateImage = () => {
        const imageElement = document.getElementById('rotatingImage');
        // Aplica una rotación basada en el valor actual de 'width'
        imageElement.style.transform = `rotate(${width * 70}deg)`;
    };

    // Llama a 'rotateImage' cada vez que 'width' cambie
    useEffect(() => {
        rotateImage();
    }, [width]);

    return (
        <div style={{ width: `${width}%` }} className="scroll">
            {/* Agrega la imagen y establece un ID para poder acceder a ella */}
            <img id="rotatingImage" src={ovillo} className="scroll_woolBall" alt="ovillo" />
        </div>
    );
};

export default Scroll