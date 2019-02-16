window.onload = () => {
  const ironhackSP = {
    lat: -23.56173216, 
    lng: -46.6623271
  };
  
  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackSP
  });

};