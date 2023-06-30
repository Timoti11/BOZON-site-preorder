/* Check External Source: bvambient.js */ 
document.addEventListener("DOMContentLoaded", function() {
    var demo1 = new BVAmbient({
selector: "#ambient",
fps: 144,
max_transition_speed: 20000,
min_transition_speed: 10000,
particle_number: 10,
particle_maxwidth: 400,
particle_minwidth: 100,
particle_radius: 4,
particle_opacity: true,
particle_colision_change: true,
particle_background: "var(--anim)",
particle_image: {
image: false,
src: ""
},
responsive: [
 {
   breakpoint: 768,
   settings: {
     particle_number: "15"
   }
 },
 {
   breakpoint: 480,
   settings: {
     particle_number: "10"
   }
 }
]
});
});