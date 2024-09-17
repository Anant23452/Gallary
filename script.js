const lenis = new Lenis({
    // infinite:true,
})

// capittal lenis is liye aya hai kyu ki jo cdn hamne html me lagaya hai vo  hi ki jaga yaha  Lenis()aya hia
// const lenis me ab lenis ka pura power a gaya hai jo jo lenis kar sakta hia vo sab 

lenis.on('scroll', (e) => {
    console.log(e)
  })
function raf(time) {
  lenis.raf(time)
  //  uper ka matlb ahi ki ye linis ke system ko bhi send kar rha hia 
  // lenis.raf(time) me ab lenis ka raf() function ko call kar rha hai
  requestAnimationFrame(raf)
  //   uper wale line ka mtlb hia ki function bahut chote interval ke liye chalega mtlb second ka bhi kai hisa kar do do use bhi chote me chale pir ruke phir chale 
  // requestAnimationFrame is a built-in JavaScript function that tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
}

requestAnimationFrame(raf)


  
document.querySelectorAll(".elem").forEach(elem => {
  let image = elem.querySelector("img");
  let tl = gsap.timeline();

  let xtrasform = gsap.utils.random(-100, 100); // Random X transformation value
  

  
  tl
  .set(image, {
    transformOrigin: `${xtrasform < 0 ? 0 : '100%'}`,
    scale: 1 // Start with scale 1
  }, "start")
  .to(elem,{
    xPercent:xtrasform,
    ease:"Power1.easeInOut",
    scrollTrigger:{
      trigger:"image",
      start:"top bottom",
      end:"bottom top",
      scrub:1,
    },
  },"start")
  

  .to(elem, {
    xPercent: xtrasform,
    ease: "none",
    scrollTrigger: {
      trigger: elem, // The element that triggers the animation
      start: "center top", // Start when the cente of the element reaches the top of the viewport
      end: "bottom top",   // End when the bottom of the element reaches the top of the viewport
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        // Check if the element is scrolling down
        if (self.direction === 1) {
          // Apply random scaling effect with a delay
          gsap.to(image, {
            scale: 0,
            duration: 0.5,
            ease: "none",
            // delay: randomDelay, // Random delay
            overwrite: "auto"
          });
        } else if (self.direction === -1) {
          // Reset the scale back to 1 if scrolling up
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: "Power2.easeOut",
            // delay: randomDelay, // Random delay
            overwrite: "auto"
          });
        }
      }
    }
  }, "start");
  
});



 

