// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        
        scrollwheel: false,
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.7565038, 37.5366518),

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#4a6775"},{"visibility":"on"}]}]
    };

    var markerImage = new google.maps.MarkerImage(
        '/static/images/assets/section-contacts/map-pic.png',
        new google.maps.Size(43,49),
        new google.maps.Point(0,0),
        new google.maps.Point(43,49)
    );
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        icon: markerImage,
        position: new google.maps.LatLng(55.7565038, 37.5366518),
        map: map,
        title: ''
    });
}