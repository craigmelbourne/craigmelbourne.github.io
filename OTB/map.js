let map;

async function initMap() {
  // The location of Uluru
  const position = { lng: -16.629129, lat: 28.291565 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: {lng: -16.732281, lat: 28.068331},
    title: "Tenerife",
  });
}

initMap();
