window.onload = () => {

  // geocoder

  const geocoder = new google.maps.Geocoder();

  document.getElementById('go').addEventListener('click', function () {
    geocodeAddress(geocoder);
  });

  function geocodeAddress(geocoder) {
    let address = document.getElementById('address').value;

    geocoder.geocode({ 'address': address }, function (results, status) {

      if (status === 'OK') {
        document.getElementById('latitude').value = results[0].geometry.location.lat();
        document.getElementById('longitude').value = results[0].geometry.location.lng();
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
};



