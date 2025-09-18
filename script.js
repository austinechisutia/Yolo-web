   const container = document.querySelector('.container-js');
    const elements = document.querySelectorAll('.star-js, .image-js');

    container.addEventListener("mousemove", (e)=>{
        const { innerWidth, innerHeight } = window;
        const moveX = (e.clientX-innerWidth/2)/10;
        const moveY = (e.clientY - innerHeight/2)/10;

        elements.forEach(el =>{
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        })
    })