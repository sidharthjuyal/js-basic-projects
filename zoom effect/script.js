const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener('mousemove',(e)=>{
   const x = e.clientX - e.target.offsetLeft;
   const y = e.clientY - e.target.offsetTop;

   img.style.transformOrigin = `${x}px ${y}px`;
   img.style.transform = `scale(2)`;
});

container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
    img.style.transitionDuration = "0.2s";
});

// clientX gets the horizontal coordinates of the cursor
// clientY gets the vertical coordinates of the cursor
// The offsetLeft property returns the left position (in pixels) relative to the parent.
// The offsetTop property returns the top position (in pixels) relative to the parent.