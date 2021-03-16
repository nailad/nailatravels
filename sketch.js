const key ='pk.eyJ1IjoibmxhdGhhbTIiLCJhIjoiY2ttMmQxMTFvMDRraDJ2bzJjejltaXh0MiJ9.BOhGPXFtX2z02YTiELpiXg';

const options = {
lat: 33.607770,
  lng: -84.277830,
  zoom: 15,
  style: 'mapbox://styles/nlatham2/ckmauqrmk7nx617qqo5ndz0m7',
  pitch: 0,
};
const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
canvas = createCanvas(windowWidth,windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); 
  loadTable('nailatravels.csv','csv','header');
}



function draw() {
 clear();
  fill(	0, 38.4, 0,50);
 stroke(0);
 strokeWeight(3);
  const zoom = myMap.zoom();
 const ellenwood = myMap.latLngToPixel(33.607770,-84.277830);

 ellipse(ellenwood.x,ellenwood.y,5 * zoom,5 * zoom);

  
 if(dist(ellenwood.x,ellenwood.y,mouseX,mouseY)< (zoom * 10)/2){
   fill(0,100); 
  }else{
    fill(255,100);
  }
}
  const latitude = Number(nailatravels(i,'Latitude'));
    const longitude = Number(nailatravels(i,'Longitude'));
    const pos = myMap.latLngToPixel(latitude,longitude);
    
    const name = nailatravels(i,'name');
  
    size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
    ellipse(pos.x,pos.y,size,size);
    
    if(dist(pos.x,pos.y,mouseX,mouseY) < size){
    textSize(32);
    text(name,pos.x,pos.y);
  }
    



$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});



