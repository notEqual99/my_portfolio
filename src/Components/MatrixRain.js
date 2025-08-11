import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = 150;
    
    var letters = '1 0 0 1';
    letters = letters.split('');
    
    var fontSize = 12;
    var columns = canvas.width / fontSize;
    
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(182, 182, 182, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = 'black';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i] += 0.8;
        
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
      columns = canvas.width / fontSize;
      drops = [];
      for (var i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden" style={{ height: '150px' }}>
      <canvas
        ref={canvasRef}
        className="block"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default MatrixRain;