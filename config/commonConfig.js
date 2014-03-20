define(
[],
function() {
  var config = {
    bingMapsKey:"ArAavTvIHoG3w9HwhroJuCFAzUttY_pQQvjdmHmZHQQfv6wahgxcyOiT3op-SCni",   
    helperServices: {
       geometry:{
        url: location.protocol + "//sjcgis.org/arcgis/rest/services/Utilities/Geometry/GeometryServer"
       },
       printTask: {
        url: location.protocol + "//sjcgis.org/arcgis/rest/services/Tools/ExportWebMapAGO/GPServer/Export%20Web%20Map"
       },
       geocode: [{
           url: location.protocol + "//sjcgis.org/arcgis/rest/services/Tools/Polaris_Geolocator/GeocodeServer",
	   name: "SJC Geocoder",
	   singleLineFieldName: "SingleLine"	   
       }]
    }
};
  
  // could use a has() test to optionally populate some global
  // property so that the stuff defined is in some global identifier
  //
  // instead, just populate a global, will need to remove the next line when
  // when we remove support for loading modules with dojo.require
  // which will be when we move to Dojo 2.0
  commonConfig = config;
  // instead of using a global, this should probably be added to some namespace...
  // do the templates have a common namespace that they use?

  return config;  
});
