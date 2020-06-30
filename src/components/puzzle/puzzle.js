const puzzle= ()=>(
<svg id="loading" viewbox="0 0 100 80">
  <defs>
    <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4383b8" />
      <stop offset="100%" stop-color="#4aa06c" />
    </linearGradient>
    
    <clipPath id="rects">
      <rect class="rect" id="rect1" x="0" y="0" width="30" height="30" rx="2" ry="2" />
      <rect class="rectdd" id="rect2" x="0" y="0" width="30" height="30" rx="2" ry="2" />
      <rect class="rect" id="rect3" x="0" y="0" width="30" height="30" rx="2" ry="2" />
      <rect class="rect" id="rect4" x="0" y="0" width="30" height="30" rx="2" ry="2" />
      <rect class="rect" id="rect5" x="0" y="0" width="30" height="30" rx="2" ry="2" />
      <rect class="rect" id="rect6" x="0" y="0" width="30" height="30" rx="2" ry="2" />
      <rect class="rect" id="rect7" x="0" y="0" width="30" height="30" rx="2" ry="2" />
    </clipPath>
  </defs>
  
    {/*(100 / sqrt(2 * 30^2)) == 0.707. 
    Used pythagorean principle to scale the rectangles to fit within a 100x100 viewport 
    --> */}
  <rect id="container" transform="translate(50) scale(0.707, 0.707) rotate(45)" x="0" y="0" width="100" height="100" fill="url(#gradient)" clip-path="url(#rects)">
  </rect>
</svg>    
)