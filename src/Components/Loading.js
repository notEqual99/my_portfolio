// Loading.js
import React, { useEffect, useRef } from 'react';
import './CSS/Loading.css';


const Loading = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set the canvas to full-screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cyrillic letters and alphabets
    let letters = 'А а Б б В в Г г Д д Е е Ё ё Ж ж З з И и Й й К к Л л М м Н н О о П п Р р С с Т т У у Ф ф Х х Ц ц Ч ч Ш ш Щ щ Ъ ъ Ы ы Ь ь Э э Ю ю Я я ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890';
    letters = letters.split('');

    // Set up columns and drops
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    // Draw function
    function draw() {
      ctx.fillStyle = 'rgba(182, 182, 182, 0.1)'; // Faded background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#000000'; // Font color
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
      }

      requestAnimationFrame(draw); // Loop the animation
    }

    draw(); // Start the animation

    // Cleanup on component unmount
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Loading;