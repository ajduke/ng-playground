// define module here
app= angular.module('googleMapsDemo', [])

app.directive('maps', function() {
  var directive = {};

  // this is to restrict only to elements and attributes
  directive.restrict = 'AE';

  directive.link = function($scope, element, attributes) {
    longitude= attributes.longitude;
    lattitude= attributes.lattitude;
    cityName= attributes.cityName;
    id =attributes.selector;

    myLatlng= new google.maps.LatLng(lattitude, longitude)
    var mapProp = {
      center: myLatlng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map=new google.maps.Map(document.getElementById(id),mapProp);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: cityName
    });
  }
  return directive;
})


//app.controller('mapsController', function($scope, $http){
//
//})
