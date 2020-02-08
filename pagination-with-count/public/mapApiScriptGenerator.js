var googleMapLoader = "https://maps.googleapis.com/maps/api/js?key=" + MAP_API_KEY + "&callback="
var mapLinkWithApi = "<script src="+ googleMapLoader + "></script>"
document.write(mapLinkWithApi);