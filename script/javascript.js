
// To start with, we just want to display our list of locations. Once we get that done,
// then we can start implementing the search.
// I used a hard-coded list for this example, but this could easily be the result of an API request.
  $(function(){
  var locations =[
    {title: "Ble Cafe-Restaurant", location: {lat: 40.632286, lng: 22.944743},
    Address: "Street: Agias Sofias 19, 54623"},
    {title: "Olympion Bar-Restaurant", location: {lat: 40.632744, lng: 22.941767},
    Address: "Street: Aristotelous Square 10, 54623"},
    {title: "Olive and Oregon Restaurant", location: {lat: 40.634679, lng: 22.943193},
    Address: "Street: Ermou 28, 54624"},
    {title: "Mojo Cafe", location: {lat: 40.631824, lng: 22.940958},
    Address: "Aristotelous 4, 54623"},
    {title: "Seven Seas Restaurant", location: {lat: 40.633300, lng: 22.939356},
    Address: "Kalapothaki 10, 54624"},
    {title: "Varelakia Gyros", location: {lat: 40.574634, lng: 22.949332},
    Address: "Street: Riga Fereou 97, 56728"}
  ];

  //We need to tell knockout about these locations so we can bind them to the view
  var viewModel = {
    locations: ko.observableArray(locations),

    query: ko.observable(''),

    search: function(value) {
      viewModel.locations.removeAll();
      for(var x in locations) {
        if(locations[x].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
          viewModel.locations.push(locations[x]);
        }
      }
    }
  };
  viewModel.query.subscribe(viewModel.search);
  ko.applyBindings(viewModel);
});
var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.640063, lng: 22.944419},
    zoom:13
  });
}
