   const container = document.querySelector('.container-js');
    const elements = document.querySelectorAll('.star-js, .image-js');

    container.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position relative to center
      const moveX = (e.clientX - innerWidth / 2) / 40; // smaller divisor = more movement
      const moveY = (e.clientY - innerHeight / 2) / 40;

      elements.forEach(el => {
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });