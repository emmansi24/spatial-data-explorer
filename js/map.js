var map = L.map('map').setView([12.9716, 77.5946], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

fetch('data/sample_points.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(
          `<b>${feature.properties.name}</b><br/>
           Type: ${feature.properties.type}`
        );
      }
    }).addTo(map);
  });
