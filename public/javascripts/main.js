window.onload = () => {
  const ironhackSP = {
    lat: -23.56173216, 
    lng: -46.6623271
  };
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackSP
  });

  const bounds = new google.maps.LatLngBounds();

  const getRestaurants = () => {
    axios.get("/restaurants/api")
    .then( response => {
      placeRestaurants(response.data.restaurants);
    })
    .catch(error => {
      console.log(error);
    })
  };
  
  const getRestaurant = () => {
    axios.get(`/restaurants/api/${idRest}`)
    .then( response => {
      placeRestaurant(response.data.restaurant);
    })
    .catch(error => {
      console.log(error);
    })
  };

  const placeRestaurants = (rests) => {
    rests.forEach((rest) => {
      const restLocation = {
        lat: rest.location.coordinates[1],
        lng: rest.location.coordinates[0]
      };
  

      bounds.extend(restLocation);
      
      new google.maps.Marker({
        position: restLocation,
        map: map,
        title: rest.name
      });

    });
    map.fitBounds(bounds);
  }
  
  const placeRestaurant = (rest) => {
      const restLocation = {
        lat: rest.location.coordinates[1],
        lng: rest.location.coordinates[0]
      };
  
      new google.maps.Marker({
        position: restLocation,
        map: map,
        title: rest.name
      });
  }

  (idRest !== 'null') ? getRestaurant() : getRestaurants();

};



